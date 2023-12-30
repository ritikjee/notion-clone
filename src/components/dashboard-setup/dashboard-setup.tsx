"use client";

import { Subscription } from "@/lib/supabase/supabase.types";
import { CreateWorkspaceFormSchema } from "@/lib/types";
import { AuthUser } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Loader from "../global/Loader";
import EmojiPicker from "../global/emoji-picker";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface DashboardProps {
  user: AuthUser;
  subscription: Subscription | null;
}

const Dashboard: React.FC<DashboardProps> = ({ user, subscription }) => {
  const [selectedEmoji, setSelectedEmoji] = React.useState("💼");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isLoading, errors },
  } = useForm<z.infer<typeof CreateWorkspaceFormSchema>>({
    mode: "onChange",
    defaultValues: {
      logo: "",
      workspaceName: "",
    },
  });

  return (
    <>
      <Card
        className="w-[800px]
                    h-screen
                    sm:h-auto"
      >
        <CardHeader>
          <CardTitle>Create a Workspace</CardTitle>
          <CardDescription>
            Workspaces are where you can create and manage your projects.You can
            add collaborators to your workspace to work on projects together.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={() => {}}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl">
                  <EmojiPicker
                    getValue={(emoji) => {
                      setSelectedEmoji(emoji);
                    }}
                  >
                    {selectedEmoji}
                  </EmojiPicker>
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="workspaceName"
                    className="text-sm
                  text-muted-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    id="workspaceName"
                    type="text"
                    placeholder="Workspace Name"
                    className="bg-transparent"
                    disabled={isLoading}
                    {...register("workspaceName", {
                      required: "Workspace name is required",
                    })}
                  />
                  <small className="text-red-900">
                    {errors.workspaceName?.message?.toString()}
                  </small>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <Label
                    htmlFor="workspaceLogo"
                    className="text-sm
                  text-muted-foreground"
                  >
                    Workspace Logo
                  </Label>
                  <Input
                    id="workspaceLogo"
                    type="file"
                    accept="image/*"
                    placeholder="Workspace Name"
                    className="bg-transparent"
                    disabled={isLoading || subscription?.status !== "active"}
                    {...register("logo", {
                      required: "Workspace name is required",
                    })}
                  />
                  <small className="text-red-900">
                    {errors.logo?.message?.toString()}
                  </small>
                </div>
                {subscription?.status !== "active" && (
                  <small
                    className="
                  text-muted-foreground
                  block
              "
                  >
                    To customize your workspace, you need to be on a Pro Plan
                  </small>
                )}
              </div>
              <div className="self-end">
                <Button disabled={isLoading} type="submit">
                  {!isLoading ? "Create Workspace" : <Loader />}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;
