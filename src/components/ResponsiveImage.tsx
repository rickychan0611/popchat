import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ResizeObserver from 'resize-observer-polyfill';

const ResponsiveImage = ({ src, className }: { src: string, className?: string }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<any>();
  const divRef = useRef<any>();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoad = (event: any) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  const handleSizeChange = () => {
    // Function to be triggered when the div size changes
    if (imageSize.width) {
      const divWidth = divRef?.current?.offsetWidth || 0;
      const imageAspectRatio = imageSize.height / imageSize.width;
      const calculatedHeight = imageAspectRatio * divWidth;
      setImageHeight(calculatedHeight)
    }
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      handleSizeChange();
    });

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, [imageSize]);

  return (
    <div style={{ width: '100%' }}
      ref={divRef}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: imageHeight,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Image
          priority
          ref={imageRef}
          src={src}
          alt="PopChat 1on1 Live Imaage"
          fill
          sizes="100%"
          onLoad={handleImageLoad}
          className={className}
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;