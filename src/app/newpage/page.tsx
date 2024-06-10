import { ButtonLink } from "@/components/ui/link";

export default function NewPageRoute() {
  return (
    <div className="min-w-dvw flex min-h-dvh p-8">
      <div className="m-auto flex w-fit flex-col gap-10">
        <h1 className="text-5xl font-bold">New Page</h1>
        <ButtonLink className="w-fit" href="/">
          Click Me
        </ButtonLink>
      </div>
    </div>
  );
}
