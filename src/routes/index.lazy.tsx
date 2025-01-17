import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/hooks/useUser";
import { Separator } from "@radix-ui/react-separator";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUserName] = useState("");
  const { setUser } = useUser();
  return (
    <Layout title="Home">
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex gap-4">
          <Button
            className="self-start"
            variant={"default"}
            isLoading={isLoading}
          >
            {isLoading ? "loading" : "not loading"}
          </Button>
          <Button
            className="self-start"
            onClick={() => setIsLoading(!isLoading)}
          >
            Toggle loading
          </Button>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <Label>Who are you?</Label>
          <Input
            className="w-96"
            value={username}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <Button
            className="self-start"
            onClick={() => {
              console.log(username);
              setUser(username);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </Layout>
  );
}
