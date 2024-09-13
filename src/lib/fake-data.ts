import { Posts } from "@/components/dashboard/posts/PostListTable";

export const dummyPostsData: Posts[] = [
  {
    _id: "1",
    title: "Tech Innovators Inc.",
    images: [
      "/images/companies/tech-innovators-1.jpg",
      "/images/companies/tech-innovators-2.jpg",
      "/images/companies/tech-innovators-3.jpg",
    ],
    banner: "/images/companies/tech-innovators-banner.jpg",
    description:
      "Tech Innovators Inc. is a leading technology company specializing in cutting-edge software solutions. With a focus on innovation and customer satisfaction, they deliver world-class products.",
    subtitle: "Leading Technology Solutions",
    created_by: "John Doe",
  },
  {
    _id: "2",
    title: "Green Energy Solutions",
    images: [
      "/images/companies/green-energy-1.jpg",
      "/images/companies/green-energy-2.jpg",
      "/images/companies/green-energy-3.jpg",
    ],
    banner: "/images/companies/green-energy-banner.jpg",
    description:
      "Green Energy Solutions is dedicated to providing sustainable energy alternatives. They specialize in solar, wind, and other renewable energy technologies to power a greener future.",
    subtitle: "Sustainable Energy for a Better Tomorrow",
    created_by: "Jane Smith",
  },
  {
    _id: "3",
    title: "Healthcare Plus",
    images: [
      "/images/companies/healthcare-plus-1.jpg",
      "/images/companies/healthcare-plus-2.jpg",
      "/images/companies/healthcare-plus-3.jpg",
    ],
    banner: "/images/companies/healthcare-plus-banner.jpg",
    description:
      "Healthcare Plus is a trusted provider of innovative healthcare services. They aim to improve the quality of life for individuals through advanced medical technology and personalized care.",
    subtitle: "Innovative Healthcare Services",
    created_by: "Emily Johnson",
  },
];
