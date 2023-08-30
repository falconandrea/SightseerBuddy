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

        <form>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="days"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Days
            </label>
            <input
              type="number"
              id="days"
              name="days"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Interests
            </label>
            <select
              multiple
              id="interests"
              name="interests[]"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            >
              <option>Food</option>
              <option>Monuments</option>
              <option>Attractions</option>
              <option>Churches</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Create Plan
          </button>
        </form>
      </div>
    </div>
  );
}
