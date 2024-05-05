import React from "react";
import { redirect } from "next/navigation";

import { getWorkspaceDetails } from "@/lib/supabase/queries";
import Editor from "@/components/editor";

async function WorkspacePage({ params }: { params: { workspaceId: string } }) {
  const { data, error } = await getWorkspaceDetails(params.workspaceId);

  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative">
      <Editor
        dirType="workspace"
        dirDetails={data[0] || {}}
        fileId={params.workspaceId}
      />
    </div>
  );
}

export default WorkspacePage;
