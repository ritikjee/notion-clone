import Editor from "@/components/editor";
import { getFileDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";

async function FilePage({ params }: { params: { fileId: string } }) {
  const { error, data } = await getFileDetails(params.fileId);

  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative">
      <Editor
        dirDetails={data[0] || {}}
        dirType="folder"
        fileId={params.fileId}
      />
    </div>
  );
}

export default FilePage;
