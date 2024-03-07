import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CgMergeVertical } from "react-icons/cg";

export default function PDFCard({ title, description, icon, href }: any) {
  const Icon = icon;
  return (
    <Link href={href}>
      <Card className="h-[200px] w-[250px]">
        <CardHeader className="flex flex-row gap-2">
          <CgMergeVertical className="w-10 h-10 text-orange-500" />
          <h2 className="font-semibold text-xl">{title}</h2>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
