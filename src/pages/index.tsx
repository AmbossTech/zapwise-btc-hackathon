import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-32",
        inter.className
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
        <Label className="text-sm text-black">Amount (Sats)</Label>
        <Input className="mt-1" />

        <Label className="block mt-4 text-sm text-black">Description</Label>
        <Input className="mt-1" />

        <Label className="block mt-4 text-sm text-black">Group ID</Label>
        <Input className="mt-1" />

        <Label className="block mt-4 text-sm text-black">Private Key</Label>
        <Input className="mt-1" />

        <Button className="mt-4">Create</Button>
      </div>
    </main>
  );
}
