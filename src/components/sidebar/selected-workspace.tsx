"use client";

import React, { useEffect, useState } from "react";

import { workspace } from "@/lib/supabase/supabase-types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import Image from "next/image";

interface SelectedWorkspaceProps {
  workspace: workspace;
  onClick?: (option: workspace) => void;
}

function SelectedWorkspace({ workspace, onClick }: SelectedWorkspaceProps) {
  const supabase = createClientComponentClient();
  const [workspaceLogo, setWorkspaceLogo] = useState("/logo.svg");
  useEffect(() => {
    if (workspace.logo) {
      const path = supabase.storage
        .from("workspace-logos")
        .getPublicUrl(workspace.logo)?.data.publicUrl;
      setWorkspaceLogo(path);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workspace]);
  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) onClick(workspace);
      }}
      className="flex 
      rounded-md 
      hover:bg-muted 
      transition-all 
      flex-row 
      p-2 
      gap-4 
      justify-center 
      cursor-pointer 
      items-center 
      my-2"
    >
      <Image
        src={workspaceLogo}
        alt="workspace logo"
        width={26}
        height={26}
        objectFit="cover"
      />
      <div className="flex flex-col">
        <p
          className="text-lg 
        w-[170px] 
        overflow-hidden 
        overflow-ellipsis 
        whitespace-nowrap"
        >
          {workspace.title}
        </p>
      </div>
    </Link>
  );
}

export default SelectedWorkspace;
