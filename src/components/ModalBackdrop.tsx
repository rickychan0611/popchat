import React from 'react';

const ModalBackdrop = ({ open, setOpen, children } : any) => {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={() => setOpen(false)}
    >
      <div 
        className="bg-white p-4 rounded w-full mx-4 max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalBackdrop;