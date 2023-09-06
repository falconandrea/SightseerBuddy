"use client";

import { HomeForm } from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 pt-8 pb-4 flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full md:max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          SightseerBuddy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your Personal Vacation Planner
        </p>

        <HomeForm setMessage={setMessage} setIsLoading={setIsLoading} />
      </div>

      {isLoading && (
        <div className="bg-white p-8 rounded-md shadow-md w-full mt-4 md:max-w-2xl">
          <h4 className="text-xl font-semibold text-center">
            Loading.. may take up to 30 seconds...
          </h4>
        </div>
      )}
      {message && (
        <div
          className="bg-white p-8 rounded-md shadow-md w-full mt-4 md:max-w-2xl"
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      )}

      <div className="p-4 text-center w-full">
        &copy; 2023 - Created by{" "}
        <a
          href="http://linktr.ee/falconandrea"
          className="underline"
          target="_blank"
        >
          Falcon Andrea
        </a>
      </div>
    </div>
  );
}
