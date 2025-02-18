"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import useUser from "@/lib/zustand/useUser";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(16),
});
const SignInForm = () => {
  const router = useRouter();

  const { setUser } = useUser();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    const userData = await axios.post("/api/auth", values);

    if (userData.data.success) {
      const userJSON = JSON.stringify(userData.data.user);
      localStorage.setItem("user", userJSON);
      await setUser({
        loginMethod: "normal",
        email: userData.data.user.email,
        name: userData.data.user.name,
      });
      router.push("/");
      toast.success(userData.data.msg);
    } else {
      toast.error(userData.data.msg);
    }
  }
  return (
    <>
      <div className="mt-5 mb-10 text-sm">
        Dont have account ?{" "}
        <span
          className="text-blue-500 font-bold cursor-pointer "
          onClick={() => router.push("/sign-up")}
        >
          Register
        </span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input placeholder="email" {...field} type="email" />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Mật khẩu</FormLabel> */}
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  {/* <FormDescription>This is your password</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
