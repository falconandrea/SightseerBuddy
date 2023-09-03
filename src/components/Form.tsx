"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const interests = [
  {
    id: "cultural_experiences",
    label: "Cultural Experiences",
  },
  {
    id: "family_friendly",
    label: "Family-Friendly",
  },
  {
    id: "food",
    label: "Food",
  },
  {
    id: "health_wellness",
    label: "Health & Wellness",
  },
  {
    id: "monuments",
    label: "Monuments",
  },
  {
    id: "religious_sites",
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
] as const;

const formSchema = z.object({
  city: z.string().min(2, {
    message: "Too short",
  }),
  days: z.coerce.number().min(1, {
    message: "At least 1 day",
  }),
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function HomeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      days: 1,
      interests: ["food", "sightseeing"],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="city">City you want to visit</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="days"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="days">Num. of days you stay</FormLabel>
              <FormControl>
                <Input
                  placeholder="Insert the number of days"
                  type="number"
                  id="days"
                  min={1}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Interests</FormLabel>
                <FormDescription>Select your interests.</FormDescription>
              </div>
              {interests.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="interests"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
