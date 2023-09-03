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
      return NextResponse.json(
        { output: "Please provide a number of days" },
        { status: 400 }
      );
    }

    if (!body.interests) {
      return NextResponse.json(
        { output: "Please provide a list of interests" },
        { status: 400 }
      );
    }

    if (!body.city) {
      return NextResponse.json(
        { output: "Please provide a city" },
        { status: 400 }
      );
    }

    if (!body.role) {
      return NextResponse.json(
        { output: "Please provide a role" },
        { status: 400 }
      );
    }

    // Create a list of interests
    const interestsString = body.interests.join(", ");

    // Create Prompt for OpenAI
    const message = `Generate a ${body.days}-day travel plan in {body.city}. The main interests for this trip are: ${interestsString}. Create a daily itinerary that covers these activities and places of interest, acting as a ${body.role} and keeping the output concise.`;

    // Send request to OpenAI
    const output = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    console.log(output.choices[0].message.content);

    // Return response
    return NextResponse.json(
      { output: output.choices[0].message.content },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { output: "Internal server error" },
      { status: 500 }
    );
  }
}
