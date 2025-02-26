# SightseerBuddy

SightseerBuddy is a vacation planning bot powered by OpenAI's ChatGPT API, built using Next.js, Tailwind CSS and TypeScript. This bot assists users in creating personalized travel itineraries for their visits to a specific city. With SightseerBuddy, users can easily input their preferences, such as the city they plan to visit, the duration of their stay, and their interests, and receive a day-by-day plan for their vacation.

- **Shadcn UI**: [Shadcn UI](https://ui.shadcn.com/) for our user interface components, ensuring a polished and user-friendly design.

- **Next.js**: SightseerBuddy is built using Next.js, a React framework that allows for efficient server rendering and seamless client-side navigation.

- **TypeScript**: I use TypeScript to enhance code quality and maintainability, providing a statically typed development environment.

- **OpenAI API**: To offer intelligent and context-aware travel recommendations, we integrate the OpenAI API, which powers our chat-based conversation with users.

- **Tailwind CSS**: The application is styled with Tailwind CSS, a utility-first CSS framework that enables rapid UI development with flexibility and consistency.

## Features

- **User-Friendly Interface**: SightseerBuddy offers a simple and intuitive interface for users to input their travel details and preferences.

- **Personalized Itineraries**: Based on user inputs, SightseerBuddy generates personalized travel itineraries that include recommendations for food, attractions, monuments, and more.

- **Day-by-Day Plans**: The bot creates a detailed day-by-day plan for the user's entire stay, ensuring a well-structured and enjoyable vacation experience.

- **Flexibility**: Users can customize their plans by specifying interests such as food, historical sites, museums, and more.

## Getting Started

### Prerequisites

- Node.js 18
- OpenAI API key

### Installation

1. Clone this repository: 
```shell
git clone https://github.com/falconandrea/sightseerbuddy.git
```
2. Navigate to the project directory: 
```shell
cd sightseerbuddy
```
3. Install dependencies: 
```shell
npm install
```

### Configuration

1. Copy the `.env.example` file to `.env` and add your OpenAI API key.
```shell
cp .env.example .env
```

### Usage

1. Run the application: 
```shell
npm run dev
```
2. Access the application through your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to contribute to SightseerBuddy, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy travels with SightseerBuddy!
