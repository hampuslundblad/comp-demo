import { createGroupOnUser, fetchUser, Group } from "@/api/user";
import Alert from "@/components/Alert";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/useToast";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";
import { useRef, useState } from "react";

export const Route = createFileRoute("/mygroups/")({
  component: RouteComponent,
  loader: () => {
    const user = localStorage.getItem("user");
    if (user) {
      return fetchUser(user);
    } else {
      return { groups: [] };
    }
  },
  staleTime: 10 * 60 * 1000, // 10 minutes
  errorComponent: () => <div>Error</div>,
});

function RouteComponent() {
  return (
    <Layout title="My groups">
      <div className="mt-8 flex flex-col gap-8">
        <CreateGroupDialog />
        <div className="flex gap-4 flex-wrap">
          {Route.useLoaderData().groups.map((group) => GroupCard(group))}
        </div>
      </div>
    </Layout>
  );
}

const AddGroupButton = () => {
  return (
    <DialogTrigger className="self-start border-2 p-2 rounded-full transition ease-in-out delay-150 hover:border-primary hover:scale-110">
      <PlusIcon />
    </DialogTrigger>
  );
};

const CreateGroupDialog = () => {
  const groupNameRef = useRef<HTMLInputElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const {
    mutate: createGroup,
    isError: isCreateGroupError,
    isPending: isCreateGroupPending,
  } = useMutation({
    mutationFn: (groupName: string) => createGroupOnUser("testuser", groupName),
    onSuccess: () => {
      setIsOpened(false);
      toast({
        title: `${groupNameRef.current?.value ?? "Group"} created!`,
        variant: "success",
      });
      router.invalidate(); // Invalidate the loader to refetch the data
    },
  });

  const handleCreateGroup = () => {
    createGroup(groupNameRef.current?.value ?? "");
  };

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <AddGroupButton />
      <DialogContent aria-describedby="dialog-title">
        <DialogHeader>
          <DialogTitle id="dialog-title">Create a group</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 my-4">
          <Label htmlFor="create-group-input">Name of group</Label>
          <Input ref={groupNameRef} id="create-group-input" />
          {isCreateGroupError && (
            <Alert
              status="error"
              title="There was an error creating the group"
            />
          )}
        </div>
        <DialogFooter className="sm:justify-start">
          <Button isLoading={isCreateGroupPending} onClick={handleCreateGroup}>
            Create group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const GroupCard = (group: Group) => {
  const groupId = "123";
  return (
    <Link
      to={"/mygroups/$groupName"}
      params={{ groupName: groupId }}
      preload="intent"
    >
      <Card className="w-96 transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer">
        <CardHeader>
          <CardTitle>{group.groupName}</CardTitle>
        </CardHeader>
        <CardContent>
          {group.players.length === 0 && (
            <p className="text-gray-400 text-sm">No players in this group!</p>
          )}
          {group.players.length > 0 &&
            group.players.map((player) => (
              <div>
                <p>{player.name}</p>
              </div>
            ))}
        </CardContent>
      </Card>
    </Link>
  );
};
