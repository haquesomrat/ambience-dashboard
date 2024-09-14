"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const UserProfileForm = ({ edit: string, setEdit: any }) => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-10">
      <form className="space-y-6 max-w-2xl col-span-1" action="">
        <div className="grid gap-2">
          <Label>First Name</Label>
          <Input type="text" />
        </div>
        <div className="grid gap-2">
          <Label>Last Name</Label>
          <Input type="text" />
        </div>
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input type="email" />
        </div>
        <div className="grid gap-2">
          <Label>Bio</Label>
          <Textarea />
        </div>
        <div className="grid gap-2">
          <Label>Designation</Label>
          <Input type="text" />
        </div>
        <div>
          <Button onClick={() => setEdit(true)}>Submit</Button>
        </div>
      </form>

      <form className="space-y-6 max-w-2xl col-span-1" action="">
        <div className="grid gap-2">
          <Label>Old Password</Label>
          <div className="relative">
            <Input type={showOldPassword ? "text" : "password"} />
            <Button
              type="button"
              className="absolute inset-y-0 right-0 px-3 bg-transparent dark:text-white text-black hover:bg-transparent"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? <Eye size={16} /> : <EyeOff size={16} />}
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <Label>New Password</Label>
          <div className="relative">
            <Input type={showNewPassword ? "text" : "password"} />
            <Button
              type="button"
              className="absolute inset-y-0 right-0 px-3 bg-transparent dark:text-white text-black hover:bg-transparent"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <Eye size={16} /> : <EyeOff size={16} />}
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Confirm Password</Label>
          <div className="relative">
            <Input type={showConfirmPassword ? "text" : "password"} />
            <Button
              type="button"
              className="absolute inset-y-0 right-0 px-3 bg-transparent dark:text-white text-black hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <Eye size={16} /> : <EyeOff size={16} />}
            </Button>
          </div>
        </div>
        <div>
          <Button onClick={() => setEdit(true)}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
