import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-lg">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <Button><Save size={'sm'}/> Save</Button>
    </div>
  );
};

export default ProjectHeader;
