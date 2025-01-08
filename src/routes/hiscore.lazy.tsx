import Layout from "@/components/Layout";
import MainTable from "@/components/MainTable";
import Search from "@/components/Search";
import { Separator } from "@/components/ui/separator";
import Title from "@/components/ui/title";
import usePlayerHiscore from "@/hooks/usePlayerHiscore";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/hiscore")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState("");
  const { data, isLoading, isError } = usePlayerHiscore(name);

  return (
    <Layout>
      <div className="flex flex-col gap-8 w-1/2">
        <Title className="my-4"> Hiscores </Title>
        <Search
          id={"username-input"}
          label={"Username"}
          onSearch={(value) => setName(value)}
        />
        {
          <MainTable
            headings={["Skill", "Level", "XP", "Rank"]}
            tableData={data?.skills}
            isLoading={isLoading}
          />
        }
      </div>
    </Layout>
  );
}
