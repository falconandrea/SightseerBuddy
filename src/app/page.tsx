import { HomeForm } from "@/components/Form";

export default function Home() {
  return (
    <div className="bg-gray-100 pt-8 pb-4 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          SightseerBuddy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your Personal Vacation Planner
        </p>

        <HomeForm />
      </div>
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
