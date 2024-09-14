import { Faq } from "@/components/dashboard/faq/FaqListTable";
import { Posts } from "@/components/dashboard/posts/PostListTable";
import { Projects } from "@/components/dashboard/projects/ProjectListTable";
import { Services } from "@/components/dashboard/services/ServicesListTable";

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

export const dummyProjects: Projects[] = [
  {
    _id: "1",
    title: "E-Commerce Website",
    url: ["https://example.com/ecommerce"],
    subject: "E-Commerce",
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "A full-fledged e-commerce platform with user authentication, product management, and online payment integration.",
    images: [
      "https://example.com/images/ecommerce1.png",
      "https://example.com/images/ecommerce2.png",
    ],
    created_by: "John Doe",
  },
  {
    _id: "2",
    title: "Social Media App",
    url: ["https://example.com/social"],
    subject: "Social Networking",
    skills: ["Next.js", "Firebase", "TailwindCSS"],
    description:
      "A social media application with real-time chat, user profiles, and image sharing capabilities.",
    images: [
      "https://example.com/images/social1.png",
      "https://example.com/images/social2.png",
    ],
    created_by: "Jane Smith",
  },
];

export const dummyFaqData: Faq[] = [
  {
    _id: "66e52bacd1245ef2b8a4cd7c",
    title: "Faq title 1",
    description: "Faq description 1",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:22:36.035Z",
    updatedAt: "2024-09-14T06:22:36.035Z",
  },
  {
    _id: "66e52bb0d1245ef2b8a4cd7f",
    title: "Faq title 2",
    description: "Faq description 2",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:22:40.659Z",
    updatedAt: "2024-09-14T06:22:40.659Z",
  },
  {
    _id: "66e52bb4d1245ef2b8a4cd82",
    title: "Faq title 3",
    description: "Faq description 3",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:22:44.015Z",
    updatedAt: "2024-09-14T06:22:44.015Z",
  },
  {
    _id: "66e52bb9d1245ef2b8a4cd85",
    title: "Faq title 4",
    description: "Faq description 4",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:22:49.435Z",
    updatedAt: "2024-09-14T06:22:49.435Z",
  },
  {
    _id: "66e52bbbd1245ef2b8a4cd88",
    title: "Faq title 5",
    description: "Faq description 5",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:22:51.441Z",
    updatedAt: "2024-09-14T06:22:51.441Z",
  },
  {
    _id: "66e52bc0d1245ef2b8a4cd8b",
    title: "Faq title 6",
    description: "Faq description 6",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:22:56.936Z",
    updatedAt: "2024-09-14T06:22:56.936Z",
  },
  {
    _id: "66e52bc5d1245ef2b8a4cd8e",
    title: "Faq title 7",
    description: "Faq description 7",
    created_by: {
      _id: "66e413a14d0c44fd3a74bbf7",
      first_name: "arafat",
      last_name: "sabbir",
      avatar: "",
    },
    createdAt: "2024-09-14T06:23:01.090Z",
    updatedAt: "2024-09-14T06:23:01.090Z",
  },
];

export const dummyServices: Services[] = [
  {
    _id: "1",
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built using React and Node.js.",
    banner: "https://example.com/banner1.jpg",
    thumbnail: "https://example.com/thumb1.jpg",
    reviews: 150,
    rating: 4.5,
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    created_by: "John Doe",
  },
  {
    _id: "2",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    banner: "https://example.com/banner2.jpg",
    thumbnail: "https://example.com/thumb2.jpg",
    reviews: 85,
    rating: 4.7,
    images: [
      "https://example.com/image4.jpg",
      "https://example.com/image5.jpg",
      "https://example.com/image6.jpg",
    ],
    created_by: "Jane Smith",
  },
  {
    _id: "3",
    title: "Social Media App",
    description:
      "A social media application built using MERN stack (MongoDB, Express, React, Node.js).",
    banner: "https://example.com/banner3.jpg",
    thumbnail: "https://example.com/thumb3.jpg",
    reviews: 230,
    rating: 4.9,
    images: [
      "https://example.com/image7.jpg",
      "https://example.com/image8.jpg",
      "https://example.com/image9.jpg",
    ],
    created_by: "Alice Johnson",
  },
];
