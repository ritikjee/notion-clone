import Editor from "@/components/editor";
import { getFolderDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";
import React from "react";

async function FolderPage({
  params,
}: {
  params: { folderId: string; workspaceId: string };
}) {
  const { error, data } = await getFolderDetails(params.folderId);

  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative">
      <Editor
        dirDetails={data[0] || {}}
        dirType="folder"
        fileId={params.folderId}
      />
    </div>
  );
}

export default FolderPage;
