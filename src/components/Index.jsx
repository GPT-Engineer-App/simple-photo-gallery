'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const photos = [
  { id: 1, src: "/placeholder.svg", alt: "Photo 1" },
  { id: 2, src: "/placeholder.svg", alt: "Photo 2" },
  { id: 3, src: "/placeholder.svg", alt: "Photo 3" },
  { id: 4, src: "/placeholder.svg", alt: "Photo 4" },
  { id: 5, src: "/placeholder.svg", alt: "Photo 5" },
  { id: 6, src: "/placeholder.svg", alt: "Photo 6" },
];

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 h-auto"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 object-cover rounded-md"
                />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{photo.alt}</DialogTitle>
                <DialogDescription>
                  Click outside to close the image.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Index;