import Layout from "@/components/Layout";
import Title from "@/components/ui/title";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <Title> Home </Title>
    </Layout>
  );
}
