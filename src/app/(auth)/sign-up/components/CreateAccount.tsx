"use client";

import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function CreateAccount() {
  return (
    <Card className="w-full mx-4 md:max-w-96">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example@student.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="grid">
        <Button className="w-full">Create account</Button>

        <small className="text-center mt-4">
          Already have an acoount?{" "}
          <Link
            className="underline hover:no-underline hover:text-[#22c55e]"
            href={"/sign-in"}
          >
            Login
          </Link>
        </small>

        <small className="text-center mt-4">
          By clicking continue, you agree to our
          <Link
            className="underline hover:no-underline hover:text-[#22c55e]"
            href={"#"}
          >
            Terms of Service
          </Link>
          and{" "}
          <Link
            className="underline hover:no-underline hover:text-[#22c55e]"
            href={"#"}
          >
            Privacy Policy.
          </Link>
        </small>
      </CardFooter>
    </Card>
  );
}
