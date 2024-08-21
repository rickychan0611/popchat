import React from 'react';
import QRCode from 'qrcode.react';
import { Android_Download, H5_URL } from '@/constants/constant';



const DownloadQRCode = () => {

  const value = Android_Download

  return (
    <div className="flex justify-center">
      <QRCode value={value} size={148} level={'M'} />
    </div>
  );
};

export default DownloadQRCode;
