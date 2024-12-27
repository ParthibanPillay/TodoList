import { TodoList } from "@/components/to-do-list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="
    min-h-screen bg-gradient-to-b from-background to-muted p-4 
    flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Todo List</h1>
            <p className="text-muted-foreground">
              stay organized and boost your  productivity
            </p>
        </div>
        <div className="flex justify-center">
        <TodoList/>
        </div>
      </div>
    </main>
  );
}
