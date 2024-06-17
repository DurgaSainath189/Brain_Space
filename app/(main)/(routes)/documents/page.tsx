"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/women_reading_light.svg"
        width="300"
        height="300"
        alt="Women Reading"
        className="dark:hidden"
      />
      <Image
        src="/women_reading_dark.svg"
        width="300"
        height="300"
        alt="Women Reading"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">Hello, Welcome to Brain Space</h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
