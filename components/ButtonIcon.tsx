import { Button } from "./ui/button";

type typeProps =
  | "default"
  | "secondary"
  | "ghost"
  | "link"
  | "outline"
  | "destructive"
  | null
  | undefined;

const ButtonIcon = ({
  icon,
  type,
}: {
  icon: React.ReactNode;
  type?: typeProps;
}) => {
  return (
    <Button
      variant={type || "default"}
      size="icon"
      className="w-10 h-10 p-0 btn-icon rounded-sm shadow-sm"
    >
      {icon}
    </Button>
  );
};

export default ButtonIcon;
