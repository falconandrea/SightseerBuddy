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
