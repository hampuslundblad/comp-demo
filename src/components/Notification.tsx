import { CircleAlert, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type NotificationProps = {
  title: string;
  description: string;
};

export function Notifcation({ title, description }: NotificationProps) {
  return (
    <Alert>
      <CircleAlert className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description} </AlertDescription>
    </Alert>
  );
}
