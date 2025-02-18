import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import useUser from "@/lib/zustand/useUser";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(16, { message: "Password must be at most 12 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});
const SignUpForm = () => {
  const { setUser } = useUser();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    const userData = await axios.post("/api/user/signup", {
      ...values,
      name: values.firstname + values.lastname,
    });
    if (userData.data.success === true) {
      // console.log(userData.data.user);
      const userJSON = JSON.stringify(userData.data.user);
      localStorage.setItem("user", userJSON);
      await setUser({
        loginMethod: "normal",
        email: userData.data.user.email,
        name: userData.data.user.name,
      });
      toast.success(userData.data.msg);
      router.push("/");
    } else {
      toast.error(userData.data.msg);
    }
  }
  return (
    <>
      <div className="mt-5 mb-10 text-sm">
        Have a account ?{" "}
        <span
          className="text-blue-500 font-bold cursor-pointer "
          onClick={() => router.push("/sign-in")}
        >
          Login
        </span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input placeholder="first name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input placeholder="last name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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

export default SignUpForm;
