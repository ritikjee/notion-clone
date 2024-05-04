"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const routes = [
  { title: "Features", href: "#features" },
  { title: "Reasources", href: "#resources" },
  { title: "Pricing", href: "#pricing" },
  { title: "Testimonials", href: "#testimonial" },
];

const Header = () => {
  const [path, setPath] = useState("#products");
  return (
    <header
      className="p-4
      flex
      justify-center
      items-center
  "
    >
      <Link
        href={"/"}
        className="w-full flex gap-2
        justify-left items-center"
      >
        <Image src={"/logo.svg"} alt="Logo" width={25} height={25} />
        <span
          className="font-semibold
          dark:text-white
        "
        >
          LampStack
        </span>
      </Link>

      <aside
        className="flex
        w-full
        gap-2
        justify-end
      "
      >
        <Link href={"/sign-in"}>
          <Button variant="btn-secondary" className=" p-1 hidden sm:block">
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="btn-primary" className="whitespace-nowrap">
            Sign Up
          </Button>
        </Link>
      </aside>
    </header>
  );
};

export default Header;
