import StatusLabel, { Status } from "@/app/components/status-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}