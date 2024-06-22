"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/computer_light.svg"}
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src={"/computer_dark.svg"}
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h1 className="text-9xl font-bold">404</h1>
      <h1 className="text-xl font-medium">Something went Wrong</h1>
      <Button asChild>
        <Link href="/documents">Go to home</Link>
      </Button>
    </div>
  );
};

export default Error;
