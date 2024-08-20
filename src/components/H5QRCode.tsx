import React from 'react';
import QRCode from 'qrcode.react';
import { H5_URL } from '@/constants/constant';



const H5QRCode = () => {

  const value = H5_URL

  return (
    <div className="flex justify-center">
      <QRCode value={value} size={148} level={'M'} />
    </div>
  );
};

export default H5QRCode;
