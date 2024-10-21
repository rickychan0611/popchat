import React from 'react';
import QRCode from 'qrcode.react';

const DownloadQRCode = () => {
  const H5_URL = process.env.NEXT_PUBLIC_H5_URL + "";
  const Android_Download = process.env.NEXT_PUBLIC_Android_Download + "";
  const value = Android_Download

  return (
    <div className="flex justify-center">
      <QRCode value={value} size={148} level={'M'} />
    </div>
  );
};

export default DownloadQRCode;
