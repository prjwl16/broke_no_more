import Deploy from "@/components/icons/deploy"
import Lock from "@/components/icons/lock"
import Cloud from "@/components/icons/cloud2"
import { Book, Pencil, File, Wifi, GraduationCap } from "lucide-react"
import Devbox from "@/components/icons/devbox"
import TypeId from "@/components/icons/type-id"
import Startup from "@/components/icons/startup"
import Enterprise from "@/components/icons/enterprise"
import AI from "@/components/icons/ai"
import APIs from "@/components/icons/apis"
import WebApps from "@/components/icons/web-apps"
import Changelog from "@/components/icons/changelog"
import Blog from "@/components/icons/blog"
import Docs from "@/components/icons/docs"
import Status from "@/components/icons/status"
import Guides from "@/components/icons/guides"

const productsPrimary = [
  {
    title: "Core Features",
    features: [
      {
        icon: Cloud,
        title: "Cloud Environments",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
      {
        icon: Deploy,
        title: "Deploys",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
      {
        icon: Lock,
        title: "Secrets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
    ],
  },
]

const productsSecondary = [
  {
    title: "Open Source",
    features: [
      {
        icon: Devbox,
        title: "Devbox",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "/cloudboxes",
      },
      {
        icon: TypeId,
        title: "TypeID",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
    ],
  },
]

const solutionsPrimary = [
  {
    title: "By stage",
    features: [
      {
        icon: Startup,
        title: "Startups",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
      {
        icon: Enterprise,
        title: "Enterprise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
    ],
  },
  {
    title: "By use-case",
    features: [
      {
        icon: AI,
        title: "AI Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
      {
        icon: APIs,
        title: "APIs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
      {
        icon: WebApps,
        title: "Web Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
    ],
  },
]

const solutionsSecondary = {
  title: "Case Studies",
  features: [
    {
      title: "Customer name/ Logo?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "#",
    },
    {
      title: "Customer name/ Logo?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "#",
    },
    {
      title: "Customer name/ Logo?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "#",
    },
  ],
}

const documentationsPrimary = [
  {
    title: "Documentation and Guides",
    features: [
      {
        icon: Changelog,
        title: "Changelog",
        description: "See what we've shipped",
        url: "/updates",
      },
      {
        icon: Blog,
        title: "Blog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
        url: "/blog",
      },
      {
        icon: Docs,
        title: "Documentation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "/docs",
      },
      {
        icon: Status,
        title: "Status",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#",
      },
      {
        icon: Guides,
        title: "Guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "/blog/guides",
      },
    ],
  },
]

const featuredArticles = {
  title: "Featured articles",
  features: [
    {
      description: "Don't Rebuild Yourself - an Intro to Nix Package Caches",
      image: "/path-to-image-1.jpg",
      url: "#",
    },
    {
      description: "Don't Rebuild Yourself - an Intro to Nix Package Caches",
      image: "/path-to-image-2.jpg",
      url: "#",
    },
    {
      description: "Don't Rebuild Yourself - an Intro to Nix Package Caches",
      image: "/path-to-image-3.jpg",
      url: "#",
    },
  ],
}

const company = [
  {
    title: "",
    features: [
      {
        icon: Cloud,
        title: "About us",
        description: "Lorem ipsum dolor sit amet",
        url: "#",
      },
    ],
  },
]

export {
  productsPrimary,
  productsSecondary,
  solutionsPrimary,
  solutionsSecondary,
  documentationsPrimary,
  featuredArticles,
  company,
}
