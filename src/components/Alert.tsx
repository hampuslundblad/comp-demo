import { CircleAlert } from "lucide-react";

import {
  Alert as ShadCnAlert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert.tsx";

type NotificationProps = {
  title: string;
  description: string;
};

function Alert({ title, description }: NotificationProps) {
  return (
    <ShadCnAlert>
      <CircleAlert className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </ShadCnAlert>
  );
}
export default Alert;
