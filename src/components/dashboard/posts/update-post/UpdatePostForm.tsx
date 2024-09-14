"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function UpdatePostForm() {
  const [postImages, setPostImages] = useState<File[]>([]);
  const [postImagesPreview, setPostImagesPreview] = useState<string[]>([]);
  const [postBanner, setPostBanner] = useState<File | null>(null);
  const [postBannerPreview, setPostBannerPreview] = useState<string | null>(
    null
  );

  const handlePostImages = useCallback((acceptedFiles: File[]) => {
    setPostImages((prev) => [...prev, ...acceptedFiles]);
    setPostImagesPreview((prev) => [
      ...prev,
      ...acceptedFiles.map((file) => URL.createObjectURL(file)),
    ]);
  }, []);

  const handlePostBanner = useCallback((acceptedFiles: File[]) => {
    const bannerFile = acceptedFiles[0]; // Only allow one banner
    setPostBanner(bannerFile);
    setPostBannerPreview(URL.createObjectURL(bannerFile));
  }, []);

  const removePostImage = (index: number) => {
    setPostImages((prev) => prev.filter((_, i) => i !== index));
    setPostImagesPreview((prev) => prev.filter((_, i) => i !== index));
  };

  const removePostBanner = () => {
    setPostBanner(null);
    setPostBannerPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
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
    postImages.forEach((image) => formData.append("postImages", image));
    if (postBanner) {
      formData.append("postBanner", postBanner);
    }
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

  const {
    getRootProps: getPostImageRootProps,
    getInputProps: getPostImageInputProps,
  } = useDropzone({
    onDrop: handlePostImages,
    accept: { "image/*": [] },
    multiple: true,
  });

  const {
    getRootProps: getPostBannerRootProps,
    getInputProps: getPostBannerInputProps,
  } = useDropzone({
    onDrop: handlePostBanner,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl shadow-input bg-white dark:bg-transparent">
      <form className="my-8 space-y-10" onSubmit={handleSubmit}>
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
            <Label className="mb-2">Post Images</Label>
            <div>
              <div
                {...getPostImageRootProps()}
                className="border border-dashed p-4 cursor-pointer rounded"
              >
                <input {...getPostImageInputProps()} />
                <p>Drag n drop some files here, or click to select files</p>
              </div>
              {postImagesPreview.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {postImagesPreview.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        height={80}
                        width={80}
                        src={image}
                        alt={`Preview ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removePostImage(index)}
                        className="absolute top-0 right-0 h-6 w-6 flex items-center justify-center text-lg bg-black/50 hover:bg-black duration-300 text-white p-1 rounded-full"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </LabelInputContainer>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="mb-2">Post Banner</Label>
            <div>
              <div
                {...getPostBannerRootProps()}
                className="border border-dashed rounded p-4 cursor-pointer"
              >
                <input {...getPostBannerInputProps()} />
                <p>Drag n drop a banner image, or click to select a file</p>
              </div>
              {postBannerPreview && (
                <div className="relative mt-4 w-fit">
                  <Image
                    height={160}
                    width={80}
                    src={postBannerPreview}
                    alt="Banner Preview"
                    className="w-40 h-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={removePostBanner}
                    className="absolute top-0 right-0 h-6 w-6 flex items-center justify-center text-lg bg-black/50 hover:bg-black duration-300 text-white rounded-full"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
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
              placeholder="Enter Post Subtitle"
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
          className="bg-gradient-to-br relative group/btn from-black dark:from-black dark:to-black to-neutral-600 block dark:bg-black w-full text-white rounded-md h-10 font-medium max-w-32"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);
