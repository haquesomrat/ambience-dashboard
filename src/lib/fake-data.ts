import { Posts } from "@/components/dashboard/posts/PostListTable";

export const dummyPostsData: Posts[] = [
  {
    _id: "1",
    postTitle: "Tech Innovators Inc.",
    PostImages: [
      "/images/companies/tech-innovators-1.jpg",
      "/images/companies/tech-innovators-2.jpg",
      "/images/companies/tech-innovators-3.jpg",
    ],
    postBanner: "/images/companies/tech-innovators-banner.jpg",
    postDescription:
      "Tech Innovators Inc. is a leading technology company specializing in cutting-edge software solutions. With a focus on innovation and customer satisfaction, they deliver world-class products.",
    postSubtitle: "Leading Technology Solutions",
    created_by: "John Doe",
  },
  {
    _id: "2",
    postTitle: "Green Energy Solutions",
    PostImages: [
      "/images/companies/green-energy-1.jpg",
      "/images/companies/green-energy-2.jpg",
      "/images/companies/green-energy-3.jpg",
    ],
    postBanner: "/images/companies/green-energy-banner.jpg",
    postDescription:
      "Green Energy Solutions is dedicated to providing sustainable energy alternatives. They specialize in solar, wind, and other renewable energy technologies to power a greener future.",
    postSubtitle: "Sustainable Energy for a Better Tomorrow",
    created_by: "Jane Smith",
  },
  {
    _id: "3",
    postTitle: "Healthcare Plus",
    PostImages: [
      "/images/companies/healthcare-plus-1.jpg",
      "/images/companies/healthcare-plus-2.jpg",
      "/images/companies/healthcare-plus-3.jpg",
    ],
    postBanner: "/images/companies/healthcare-plus-banner.jpg",
    postDescription:
      "Healthcare Plus is a trusted provider of innovative healthcare services. They aim to improve the quality of life for individuals through advanced medical technology and personalized care.",
    postSubtitle: "Innovative Healthcare Services",
    created_by: "Emily Johnson",
  },
];
