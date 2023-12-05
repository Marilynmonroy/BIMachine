import Form from "@/components/Form";
import Partner from "@/components/Partner";
import What from "@/components/What";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-surface-500 flex-col justify-between p-24">
      <Form />
      <What />
      <Partner />
    </main>
  );
}
