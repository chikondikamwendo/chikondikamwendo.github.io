import { Button } from "@/components/ui/button";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto border-l min-h-screen">
        <header>
            <ul>
                <li>
                    <Button></Button>
                </li>
            </ul>
        </header>
      {children}
    </main>
  );
}
