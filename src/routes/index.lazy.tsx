import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout title="Home">
      <div className="flex gap-4">
        <Button variant={"default"} isLoading={isLoading}>
          {isLoading ? "loading" : "not loading"}
        </Button>
        <Button onClick={() => setIsLoading(!isLoading)}>Toggle loading</Button>
      </div>
    </Layout>
  );
}
