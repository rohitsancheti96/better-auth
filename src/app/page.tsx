import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-6 px-4 max-w-md mx-auto">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-blod">Learn Auth</h1>
        <Button asChild size="lg">
          <Link href="/auth/login" className="">
            Sign In / Sign Up
          </Link>
        </Button>
      </div>
    </div>
  );
}
