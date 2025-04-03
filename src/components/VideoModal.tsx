
import React, { useRef, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle video playback when modal opens/closes
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false; // Unmute when in modal
    }
    // No need to pause as the video element will be removed from DOM when modal closes
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent 
        className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-black border-none" 
        onEscapeKeyDown={onClose}
        onInteractOutside={onClose}
        aria-describedby="video-modal-description"
      >
        <div className="relative w-full h-full" id="video-modal-description">
          <video
            ref={videoRef}
            className="w-full max-h-[85vh] object-contain"
            controls
            autoPlay
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
