import Layout from "@/components/Layout";
import MainTable from "@/components/MainTable";
import Search from "@/components/Search";
import usePlayerHiscore from "@/hooks/usePlayerHiscore";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/hiscore")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState("");
  const { data, isLoading, isError } = usePlayerHiscore(name);
  console.log(data);
  return (
    <Layout>
      <Search
        id={"username-input"}
        label={"Username"}
        onSearch={(value) => setName(value)}
      />

      <MainTable headings={["Skill", "Level", "XP"]} tableData={data} />
    </Layout>
  );
}
