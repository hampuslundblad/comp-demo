import { fetchHiscoreByName } from "@/api/osrs/index.ts";
import Layout from "@/components/Layout.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mygroups/$groupId")({
  loader: () => {
    const response = fetchHiscoreByName("test");
    return response;
  },
  staleTime: 10 * 60 * 1000, // 10 minutes

  component: RouteComponent,
  errorComponent: () => <div>Error</div>,
  pendingComponent: () => <div>Loading</div>,
});

function RouteComponent() {
  const _data = Route.useLoaderData();

  const { _groupId } = Route.useParams();

  return (
    <Layout title="My groups" showBackButton>
      <div className="mt-8 flex flex-col gap-8">
        <PlayerCard playerName="1. 368 int" />
        <PlayerCard playerName="2. noobster" />
        <PlayerCard playerName="3. test tesssson" />
      </div>
    </Layout>
  );
}

const PlayerCard = ({ playerName }: { playerName: string }) => {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>{playerName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>Total level : 1337</p> <p>Experience gained last week : 1.2m</p>
        </div>
      </CardContent>
    </Card>
  );
};
