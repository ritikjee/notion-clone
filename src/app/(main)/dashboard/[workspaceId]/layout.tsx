import Sidebar from "@/components/sidebar";
import React from "react";

function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <main
      className="flex overflow-hidden
      h-screen
      w-screen
    "
    >
      <Sidebar params={params} />
      <div
        className="dark:boder-Neutrals-12/70
        border-l-[1px]
        w-full
        relative
        overflow-scroll
      "
      >
        {children}
      </div>
    </main>
  );
}

export default WorkspaceLayout;
