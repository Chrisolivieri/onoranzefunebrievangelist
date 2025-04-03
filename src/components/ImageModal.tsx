
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent 
        className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-black border-none" 
        onEscapeKeyDown={onClose}
        onInteractOutside={onClose}
      >
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt="Full size view"
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
