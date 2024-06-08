import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button:React.FC<ButtonProps> = ({ href, children }) => (
  <Link
    href={href}
    className="inline-block px-6 py-2 text-sm font-medium mr-5 text-white transition bg-slate-700 rounded-lg hover:bg-blue-700 focus:outline-none"
  >
    {children}
  </Link>
);

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-black"></div>
);


const items = [
  {
    title: "Getting Started",
    description: "Find all the resources you need to start your learning journey. From account setup to course selection, we guide you every step of the way.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    button: <Button href="/getting-started">Learn More</Button>
  },
  {
    title: "Technical Support",
    description: "Experiencing technical issues? Our technical support team are here to help.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    button: <Button href="/contact-support">Contact Support</Button>
  },
  {
    title: "Course Assistance",
    description: "Need help with course materials? Access detailed explanations, and additional resources.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    button: <Button href="/course-assistance">Learn More</Button>
  },
  {
    title: "Account and Billing",
    description: "Manage your account settings and billing information with ease. Find answers to common questions about subscriptions and payments.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    button: <Button href="/account-billing">Read More</Button>,
    button2: <Button href="/account-settings">Update Info</Button>
  },
];

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          button={item.button}
          button2= {item.button2}
        />
      ))}
    </BentoGrid>
  );
}