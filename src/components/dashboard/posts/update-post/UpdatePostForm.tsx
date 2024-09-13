"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileUpload } from "@/components/ui/file-upload";

export function UpdatePostForm() {
  const [postImages, setPostImage] = useState<File[]>([]);
  const [postBanner, setPostBanner] = useState<File[]>([]);

  const handlePostImage = (postImages: File[]) => {
    setPostImage(postImages);
    console.log(postImages[0]);
  };
  const handlePostBanner = (postBanner: File[]) => {
    setPostBanner(postBanner);
    console.log(postBanner[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // Using currentTarget for form

    const postTitle = (form.elements.namedItem("postTitle") as HTMLInputElement)
      .value;

    const postSubtitle = (
      form.elements.namedItem("postSubtitle") as HTMLInputElement
    ).value;
    const postDescription = (
      form.elements.namedItem("postDescription") as HTMLInputElement
    ).value;

    const formData = new FormData();
    formData.append("postTitle", postTitle);
    formData.append("postImages", postImages[0]);
    formData.append("postBanner", postBanner[0]);
    formData.append("postSubtitle", postSubtitle);
    formData.append("postDescription", postDescription);

    console.log({
      postTitle,
      postImages,
      postBanner,
      postDescription,
      postSubtitle,
    });
  };

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl shadow-input bg-white dark:bg-transparent">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="mb-2" htmlFor="post_title">
              Post Title
            </Label>
            <Input
              id="post_title"
              name="postTitle"
              placeholder="Enter Post Title"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="mb-2" htmlFor="company_logo">
              Post Image
            </Label>
            <FileUpload onChange={handlePostImage} />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="mb-2" htmlFor="company_logo">
              Post Banner
            </Label>
            <FileUpload onChange={handlePostBanner} />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="mb-2" htmlFor="post_subtitle">
              Post Subtitle
            </Label>
            <Input
              id="post_subtitle"
              name="postSubtitle"
              placeholder="Enter Post Subitle"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="mb-2" htmlFor="post-description">
              Post Description
            </Label>
            <Input
              id="post-description"
              name="postDescription"
              placeholder="Enter Post Description"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
