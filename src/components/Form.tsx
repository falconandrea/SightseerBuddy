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
import { useEffect, useState } from "react";
import { interests, roles, roleDescriptions } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  city: z.string().min(2, {
    message: "Insert city",
  }),
  days: z.coerce.number().min(1, {
    message: "At least 1 day",
  }),
  role: z.string().min(1, {
    message: "Select role",
  }),
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function HomeForm(props: {
  setMessage: (message: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}) {
  const [error, setError] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      days: 1,
      interests: ["food", "sightseeing"],
      role: "expert traveler",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    props.setMessage("");
    props.setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.status !== 200) {
        throw new Error(data.data);
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
      props.setMessage(data.data);
      props.setIsLoading(false);
      form.reset();
    } catch (error: any) {
      setError(error.message);
      props.setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* City */}
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

        {/* Days */}
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

        {/* Roles */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role for your Sightseer Buddy</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roles.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription className="text-xs">
                Choose how you want the artificial intelligence to act and
                provide advice. Each role will influence how the travel plan is
                created and presented. Click{" "}
                <Dialog>
                  <DialogTrigger className="underline">here</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>About the roles</DialogTitle>
                      <DialogDescription>
                        {roleDescriptions.map((item, index) => (
                          <p key={index} className="mt-2">
                            <strong>{item.title}</strong>: {item.text}
                          </p>
                        ))}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>{" "}
                for more information.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Interests */}
        <FormField
          control={form.control}
          name="interests"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Interests</FormLabel>
                <FormDescription>Select your interests.</FormDescription>
              </div>
              <div className="flex flex-wrap">
                {interests.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="interests"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0 w-1/2 mb-2"
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
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </Form>
  );
}
