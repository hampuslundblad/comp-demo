import Layout from "@/components/Layout";
import Search from "@/components/Search";
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
import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MinusIcon, PlusIcon } from "lucide-react";

export const Route = createFileRoute("/mygroups/")({
  component: RouteComponent,
});

const handleSearch = (value: string) => {
  console.log("yep", value);
};

function RouteComponent() {
  return (
    <Layout title="My groups">
      <div className="mt-8 flex flex-col gap-8">
        <Dialog>
          <AddGroupButton />
          <DialogContent aria-describedby="dialog-title">
            <DialogHeader>
              <DialogTitle id="dialog-title">Create a group</DialogTitle>
            </DialogHeader>
            <div>
              <Search
                id="group-player-search-input"
                label={"Search for a player"}
                onSearch={handleSearch}
              />
              <div className="mt-4 flex flex-col gap-4">
                <span className="flex justify-between gap-2 items-center w-1/5 ">
                  368 int <PlusIcon size={16} />
                </span>
                <span className="flex justify-between gap-2 items-center w-1/5 ">
                  stefan <PlusIcon size={16} />
                </span>
                <span className="flex justify-between gap-2 items-center w-1/5 ">
                  stig <PlusIcon size={16} />
                </span>
              </div>
              <div className="mt-4 mb-4">
                <Separator orientation="horizontal" />
                <h2 className="text-1xl font-bold mt-4"> Added players </h2>
                <div>
                  <span className="flex justify-between gap-2 items-center w-1/5 ">
                    368 int <MinusIcon size={16} />
                  </span>
                  <span className="flex justify-between gap-2 items-center w-1/5 ">
                    stefan <MinusIcon size={16} />
                  </span>
                  <span className="flex justify-between gap-2 items-center w-1/5 ">
                    stig <MinusIcon size={16} />
                  </span>
                </div>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Button>Save group</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="flex gap-4 flex-wrap">
          <ExampleGroupCard />
          <ExampleGroupCard />
          <ExampleGroupCard />
          <ExampleGroupCard />
          <ExampleGroupCard />
          <ExampleGroupCard />
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

const ExampleGroupCard = () => {
  const groupId = "123";
  return (
    <Link
      to={"/mygroups/$groupId"}
      params={{ groupId: groupId }}
      preload="intent"
    >
      <Card className="w-96 transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer">
        <CardHeader>
          <CardTitle>Group name</CardTitle>
        </CardHeader>
        <CardContent>
          <ol>
            <li>
              368 int <span> </span>
            </li>
            <li> inteals </li>
            <li> random user </li>
          </ol>
        </CardContent>
        {/* <CardFooter>
        <Button size="sm">Delete group</Button>
      </CardFooter> */}
      </Card>
    </Link>
  );
};
