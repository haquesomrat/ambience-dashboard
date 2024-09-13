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
              label: "Add Post",
              active: pathname === "/dashboard/posts/add-post",
            },
          ],
        },
        {
          href: "",
          label: "Projects",
          active: pathname === "/projects",
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/projects",
              label: "All Projects",
              active: pathname === "/dashboard/projects",
            },
            {
              href: "/dashboard/projects/new",
              label: "New Project",
              active: pathname === "/dashboard/projects/new",
            },
          ],
        },
        {
          href: "",
          label: "Menus",
          active: pathname === "/menus",
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/menus",
              label: "All Menus",
              active: pathname === "/dashboard/menus",
            },
            {
              href: "/dashboard/menus/new",
              label: "New Menu",
              active: pathname === "/dashboard/menus/new",
            },
          ],
        },
        {
          href: "",
          label: "Services",
          active: pathname === "/services",
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/services",
              label: "All Services",
              active: pathname === "/dashboard/services",
            },
            {
              href: "/dashboard/services/new",
              label: "New Service",
              active: pathname === "/dashboard/services/new",
            },
          ],
        },
        {
          href: "",
          label: "Socials",
          active: pathname === "/socials",
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/socials",
              label: "All Socials",
              active: pathname === "/dashboard/socials",
            },
            {
              href: "/socials/new",
              label: "New Social",
              active: pathname === "/dashboard/socials/new",
            },
          ],
        },
        {
          href: "",
          label: "Options",
          active: pathname === "/options",
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/options",
              label: "All Options",
              active: pathname === "/dashboard/options",
            },
            {
              href: "/dashboard/options/new",
              label: "New Option",
              active: pathname === "/dashboard/options/new",
            },
          ],
        },
        {
          href: "",
          label: "FAQs",
          active: pathname === "/faqs",
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/faqs",
              label: "All FAQs",
              active: pathname === "/dashboard/faqs",
            },
            {
              href: "/dashboard/faqs/new",
              label: "New FAQ",
              active: pathname === "/dashboard/faqs/new",
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
