import React from "react";
import TitleSection from "./_components/title";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <main>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
        >
          <Button
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
            text-white
            hover:text-primary-foreground
          "
          >
            Get LampStack Free
          </Button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
