import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PDFCard from "@/components/pdf/pdf-card.component";
import Image from "next/image";
import Link from "next/link";
import { CgMergeVertical } from "react-icons/cg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold mb-10">PDF Tools</h1>
      <section className="w-full flex flex-wrap gap-4 justify-center">
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
        <PDFCard
          href="/pdf/merge"
          title="Merge PDFs"
          description="Merge multiple PDF files into a single PDF."
        />
      </section>
    </main>
  );
}
