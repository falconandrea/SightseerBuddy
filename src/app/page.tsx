import { HomeForm } from "@/components/Form";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          SightseerBuddy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your Personal Vacation Planner
        </p>

        <HomeForm />
      </div>
    </div>
  );
}
