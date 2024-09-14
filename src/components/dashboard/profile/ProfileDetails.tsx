"use client";
import { ProfileForm } from "@/app/(account-settings)/profile/profile-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dummyProfile } from "@/lib/fake-data";
import { FilePenLine } from "lucide-react";
import React, { useState } from "react";
import UserProfileForm from "./ProfileForm";
import { Button } from "@/components/ui/button";

export type Profile = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  bio?: string;
  designation?: string;
  password: string;
  avatar?: string;
};

const ProfileDetails = () => {
  const [profile] = useState<Profile>(dummyProfile[0]); // Assuming dummyProfile is an array and you want the first item
  const [edit, setEdit] = useState(true);

  return (
    <div className="mt-10">
      <div className="space-y-4">
        <Avatar className="w-40 h-40">
          <AvatarImage
            src={profile.avatar || "https://github.com/shadcn.png"}
          />
          <AvatarFallback>
            {profile.first_name[0]}
            {profile.last_name[0]}
          </AvatarFallback>
        </Avatar>
        {edit && (
          <Button
            onClick={() => setEdit(false)}
            className="dark:text-white gap-2 hover:bg-secondary hover:text-black border bg-black rounded w-fit cursor-pointer"
          >
            Edit Profile
            <FilePenLine className="size-4" />
          </Button>
        )}

        {edit ? (
          <>
            <h6 className="text-2xl">
              {profile.first_name} {profile.last_name}
            </h6>
            <p>{profile.designation}</p>
            <p>{profile.email}</p>
            <p>{profile.bio}</p>
          </>
        ) : (
          <UserProfileForm edit={edit} setEdit={setEdit} />
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
