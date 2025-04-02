
import React, { useRef } from 'react';

interface MapProps {
  location: string;
}

const Map: React.FC<MapProps> = ({ location }) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  
  return (
    <div className="w-full h-full">
      <iframe
        ref={mapRef}
        className="w-full h-full border-0"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location)}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
