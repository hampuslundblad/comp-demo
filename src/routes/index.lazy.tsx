import Layout from "@/components/Layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout title="Home">
      <div></div>
    </Layout>
  );
}
