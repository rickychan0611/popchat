import React, { useState, useEffect, useRef } from 'react';

// Custom hook to get the size of a div
function useDivSize(divRef: any) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update size
    function updateSize() {
      if (divRef.current) {
        setSize({
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight
        });
      }
    }

    // Initially update size
    updateSize();

    // Event listener to update size on window resize
    window.addEventListener('resize', updateSize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', updateSize);
  }, []); // Empty dependency array ensures this effect runs only once

  return size;
}

export default useDivSize
