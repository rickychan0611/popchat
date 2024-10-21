import React from 'react';
import QRCode from 'qrcode.react';

const H5QRCode = () => {

  const H5_URL = process.env.NEXT_PUBLIC_H5_URL + "";

  return (
    <div className="flex justify-center">
      <QRCode value={H5_URL} size={148} level={'M'} />
    </div>
  );
};

export default H5QRCode;
