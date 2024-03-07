'use client';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { config } from '@/config';
import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IconType } from 'react-icons';
import { FaFileUpload, FaRegFilePdf } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';
import { MdFileDownload } from 'react-icons/md';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

const colors = {
  red: { bg: 'bg-red-500/20', text: 'text-red-500' },
  blue: { bg: 'bg-blue-500/20', text: 'text-blue-500' },
  green: { bg: 'bg-green-500/20', text: 'text-green-500' },
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-500' },
};

export default function PDFCard({
  title,
  description,
  icon: Icon,
  color = 'blue',
  endpoint,
}: {
  title: string;
  description: string;
  icon: IconType;
  color?: keyof typeof colors;
  endpoint: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();

    file.readAsArrayBuffer(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        'application/pdf': ['.pdf'],
        'image/jpeg': ['.jpg', '.jpeg'],
        'application/msword': ['.doc'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          ['.docx'],
      },
    });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    if (!acceptedFiles) return;

    const formData = new FormData();

    acceptedFiles.forEach((file) => {
      formData.append(`files`, file);
    });

    const result = await fetch(`${config.api.url}${endpoint}`, {
      method: 'POST',
      body: formData,
    });

    const data = await result.blob();
    setLoading(false);

    const blob = new Blob([data], { type: 'application/pdf' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'pdf-tool.pdf'; // Set your desired filename
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card
          className={cn(
            'min-h-56 md:min-h-64 w-64 md:w-72 lg:w-80 bg-black hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer',
            colors[color].bg
          )}
        >
          <CardHeader className="flex flex-row gap-2">
            <Icon
              className={cn(
                'w-10 h-10 text-orange-500',
                colors[color as keyof typeof colors].text
              )}
            />
            <h2 className="font-semibold text-xl">{title}</h2>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent className="w-full min-h-[500px] px-8 py-8 md:px-16">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <DrawerHeader className="flex flex-col justify-center items-center">
            <DrawerTitle className="text-center text-2xl">{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
            <Icon
              className={cn(
                'w-14 h-14 text-orange-500 mt-3',
                colors[color as keyof typeof colors].text
              )}
            />
          </DrawerHeader>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="border border-dashed border-black p-4 md:p-8 rounded-xl">
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p className="text-center">
                  Drag or drop some files here, or click to select files
                </p>
              )}
              {loading ? (
                <div className="flex justify-center items-center mt-4">
                  <IoReload className="animate-spin w-8 h-8" />
                </div>
              ) : (
                <div className="flex justify-center items-center mt-2">
                  <FaFileUpload className="w-8 h-8" />
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg text-center">Uploaded</p>
            {acceptedFiles[0] && (
              <aside className="flex flex-col justify-center items-center gap-2 mt-2">
                <FaRegFilePdf className="w-8 h-8" />
                {acceptedFiles.map((file) => (
                  <div
                    key={file.name}
                    className="w-64 md:w-[32rem] h-auto break-words text-center"
                  >
                    {file.name}
                  </div>
                ))}
              </aside>
            )}{' '}
          </div>

          <Button className="mt-4 p-4" onClick={handleSubmit}>
            <p className="text-lg">Download</p>
            <MdFileDownload className="w-6 h-6" />
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
