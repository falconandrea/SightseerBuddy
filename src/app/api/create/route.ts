import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request, res: NextResponse) {
  try {
    const body = await req.json();

    // Checks on inputs
    if (!body.days) {
      return NextResponse.json({
        status: 400,
        data: "Please provide a number of days",
      });
    }

    if (!body.interests) {
      return NextResponse.json({
        status: 400,
        data: "Please provide a list of interests",
      });
    }

    if (!body.city) {
      return NextResponse.json({
        status: 400,
        data: "Please provide a city",
      });
    }

    if (!body.role) {
      return NextResponse.json({
        status: 400,
        data: "Please provide a role",
      });
    }

    // Create a list of interests
    const interestsString = body.interests.join(", ");

    // Create Prompt for OpenAI
    const prompt = `Generate a ${body.days}-day travel plan in ${body.city}. The main interests for this trip are: ${interestsString}. Create a daily itinerary that covers these activities and places of interest, acting as a ${body.role} and keeping the output concise. Return me the response as html, only the body tag content.`;

    // Send request to OpenAI
    const output = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
    });

    let message = output.choices[0].message.content;

    if (message) {
      message = message
        .replaceAll("<h4>", "<h5 class='text-md font-semibold mb-2 mt-2'>")
        .replaceAll("</h4>", "</h5>");
      message = message
        .replaceAll("<h3>", "<h4 class='text-md font-semibold mb-2 mt-2'>")
        .replaceAll("</h3>", "</h4>");
      message = message
        .replaceAll("<h2>", "<h3 class='text-xl font-semibold mb-2 mt-2'>")
        .replaceAll("</h2>", "</h3>");
      message = message
        .replaceAll("<h1>", '<h2 class="text-2xl font-semibold mb-2 mt-2">')
        .replaceAll("</h1>", "</h2>");
      message = message
        .replaceAll("<title>", '<h1 class="text-3xl font-semibold mb-4 mt-4">')
        .replaceAll("</title>", "</h1>");
      message = message.replaceAll("<ul>", "<ul class='list-disc pl-4'>");
      message = message.replaceAll("<p>", "<p class='my-2'>");
    }

    // Return response
    return NextResponse.json({
      status: 200,
      data: message,
    });
  } catch (error) {
    console.log("ERRORE API", error);
    return NextResponse.json({
      status: 500,
      data: "Internal Server Error",
    });
  }
}
