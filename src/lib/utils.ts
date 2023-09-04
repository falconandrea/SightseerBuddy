import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const interests = [
  {
    id: "cultural experiences",
    label: "Cultural Experiences",
  },
  {
    id: "family friendly",
    label: "Family-Friendly",
  },
  {
    id: "food",
    label: "Food",
  },
  {
    id: "health and wellness",
    label: "Health & Wellness",
  },
  {
    id: "monuments",
    label: "Monuments",
  },
  {
    id: "religious sites",
    label: "Religious Sites",
  },
  {
    id: "shopping",
    label: "Shopping",
  },
  {
    id: "sightseeing",
    label: "Sightseeing",
  },
];

export const roles = [
  {
    id: "expert traveler",
    label: "Expert traveler",
  },
  {
    id: "local resident",
    label: "Local resident",
  },
  {
    id: "traveler agent",
    label: "Travel agent",
  },
];

export const roleDescriptions = [
  {
    title: "Expert Traveler",
    text: "This interpretation suggests that the travel plan will be based on the personal experience of an expert traveler who has visited the city. You could receive recommendations based on personal opinions and detailed advice on places to visit, restaurants to try, and activities to do. It can be useful if you are looking for a travel plan that incorporates personal experiences and travel advice from an expert.",
  },
  {
    title: "Travel Agent",
    text: "This interpretation suggests that the travel plan will be based on professional advice from a travel agent. You might receive a well-organized travel plan, considering logistical aspects such as reservations, schedules, and accessibility of places of interest. It's useful if you are seeking detailed and professional planning, especially if you are actually planning the trip.",
  },
  {
    title: "Local Resident",
    text: "This interpretation suggests that the travel plan will be based on the experience of someone who lives in the city and is familiar with the local culture and activities. You could get authentic suggestions for non-touristy places, local events, and daily life in the city. It's ideal if you want a more authentic and immersive experience in the destination city.",
  },
];
