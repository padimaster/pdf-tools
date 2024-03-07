'use client';
import PDFCard from '@/components/pdf/pdf-card.component';
import { BsFiletypeDocx } from 'react-icons/bs';
import { FaCompressArrowsAlt, FaFileImage } from 'react-icons/fa';
import { SlDocs } from 'react-icons/sl';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 md:p-24">
      <h1 className="text-3xl md:text-6xl font-bold mb-10">PDF Tools</h1>
      <section className="max-w-[40rem] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center content-center place-items-center">
        <PDFCard
          title="Word to PDF"
          description="Effortlessly convert Word documents into a unified PDF file."
          icon={BsFiletypeDocx}
          endpoint="/word-pdf"
          color="blue"
        />

        <PDFCard
          title="JPG to PDF"
          description="Combine multiple JPG images into a consolidated PDF document."
          icon={FaFileImage}
          endpoint="/jpg-pdf"
          color="green"
        />

        <PDFCard
          title="PDF Merge Tool"
          description="Integrate various PDF files into a single, organized document."
          icon={SlDocs}
          endpoint="/merge"
          color="red"
        />

        <PDFCard
          title="PDF Compression"
          description="Efficiently compress PDF files to reduce their size without compromising quality."
          icon={FaCompressArrowsAlt}
          endpoint="/compress"
          color="purple"
        />
      </section>
    </main>
  );
}
