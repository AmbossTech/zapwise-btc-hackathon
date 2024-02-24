import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addExpense, getGroupExpenses } from "@/lib/nostr";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

console.log({ events: getGroupExpenses("amboss").then(console.log) });

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-32"
      )}
    >
      <div className="flex">
        <h1 className="text-white text-3xl [@media(min-width:400px)]:text-4xl font-semibold text-center">
          Settle expenses with Sats
        </h1>
        <motion.span
          animate={{ scale: [1, 1.2], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          ⚡
        </motion.span>
      </div>

      <div className="flex flex-col bg-slate-200 w-full md:w-[600px] px-6 md:px-24 py-3 md:py-16 rounded-lg">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const values = new FormData(event.target as any);

            const groupId = values.get("groupId");
            const amount = values.get("amount");
            const description = values.get("description");
            const participants: string[] = [];
            const nsec = values.get("nsec");

            if (!groupId || !amount || !description || !nsec) {
              alert("Please fill in all fields");
              return;
            }

            addExpense(
              groupId.toString(),
              +amount.toString(),
              description.toString(),
              participants,
              nsec.toString()
            );
          }}
        >
          <Label className="text-sm text-black">Amount (Sats)</Label>
          <Input className="mt-1" name="amount" />

          <Label className="block mt-4 text-sm text-black">Description</Label>
          <Input className="mt-1" name="description" />

          <Label className="block mt-4 text-sm text-black">Group ID</Label>
          <Input className="mt-1" name="groupId" />

          <Label className="block mt-4 text-sm text-black">Private Key</Label>
          <Input className="mt-1" name="nsec" />

          <Button className="mt-4">Create</Button>
        </form>
      </div>
    </main>
  );
}
