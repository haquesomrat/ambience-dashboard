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

export function ForgetPassword() {
  return (
    <Card className="w-full mx-4 md:max-w-96">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>Enter your email below to confirm</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@student.com" />
        </div>
      </CardContent>
      <CardFooter className="grid">
        <Link href={"/reset-password"}>
          <Button className="w-full">Reset Password</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
