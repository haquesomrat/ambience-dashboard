import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Dashboard",
          active: pathname === "/dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          active: pathname === "/posts",
          icon: SquarePen,
          submenus: [
            {
              href: "/dashboard/posts",
              label: "All Posts",
              active: pathname === "/dashboard/posts",
            },
            {
              href: "/dashboard/posts/add-post",
              label: "New Post",
              active: pathname === "/dashboard/posts/add-post",
            },
          ],
        },
        {
          href: "",
          label: "Projects",
          active: pathname.includes("/projects"),
          icon: Bookmark,
          submenus: [
            {
              href: "/projects",
              label: "All Projects",
              active: pathname === "/projects",
            },
            {
              href: "/projects/new",
              label: "New Project",
              active: pathname === "/projects/new",
            },
          ],
        },
        {
          href: "",
          label: "Menus",
          active: pathname.includes("/menus"),
          icon: Bookmark,
          submenus: [
            {
              href: "/menus",
              label: "All Menus",
              active: pathname === "/menus",
            },
            {
              href: "/menus/new",
              label: "New Menu",
              active: pathname === "/menus/new",
            },
          ],
        },
        {
          href: "",
          label: "Services",
          active: pathname.includes("/services"),
          icon: Bookmark,
          submenus: [
            {
              href: "/services",
              label: "All Services",
              active: pathname === "/services",
            },
            {
              href: "/services/new",
              label: "New Service",
              active: pathname === "/services/new",
            },
          ],
        },
        {
          href: "",
          label: "Socials",
          active: pathname.includes("/socials"),
          icon: Bookmark,
          submenus: [
            {
              href: "/socials",
              label: "All Socials",
              active: pathname === "/socials",
            },
            {
              href: "/socials/new",
              label: "New Social",
              active: pathname === "/socials/new",
            },
          ],
        },
        {
          href: "",
          label: "Options",
          active: pathname.includes("/options"),
          icon: Bookmark,
          submenus: [
            {
              href: "/options",
              label: "All Options",
              active: pathname === "/options",
            },
            {
              href: "/options/new",
              label: "New Option",
              active: pathname === "/options/new",
            },
          ],
        },
        {
          href: "",
          label: "FAQs",
          active: pathname.includes("/faqs"),
          icon: Bookmark,
          submenus: [
            {
              href: "/faqs",
              label: "All FAQs",
              active: pathname === "/faqs",
            },
            {
              href: "/faqs/new",
              label: "New FAQ",
              active: pathname === "/faqs/new",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashboard/users",
          label: "Users",
          active: pathname.includes("/dashboard/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
