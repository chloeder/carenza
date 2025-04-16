import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export function ComingSoonCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center z-10">
        <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
          Coming Soon
        </span>
      </div>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-zinc-200 text-base">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400 text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
