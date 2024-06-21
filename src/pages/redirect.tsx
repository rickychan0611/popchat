import { Android_Download } from '@/constants/constant';
import { getLayout } from '@/layouts/DefaultLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DeviceDetector = () => {

  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Detect platform
    let platform = 'Unknown';
    if (/android/i.test(userAgent)) {
      platform = 'Android';
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      platform = 'iOS';
    }

    // Detect browser
    let browser = 'Unknown';
    if (/chrome|crios|crmo/i.test(userAgent)) {
      browser = 'Chrome';
    } else if (/firefox|fxios/i.test(userAgent)) {
      browser = 'Firefox';
    } else if (/safari/i.test(userAgent) && !/chrome|crios|crmo/i.test(userAgent)) {
      browser = 'Safari';
    } else if (/msie|trident/i.test(userAgent)) {
      browser = 'Internet Explorer';
    } else if (/edge|edgios|edga|edg/i.test(userAgent)) {
      browser = 'Edge';
    }

    if (platform === 'iOS') {
      router.push('/addIcon')
    }

    else router.push(Android_Download)

  }, []);

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-black flex-col'
      style={{
        backgroundImage: "url('/bg-4.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }}>
      <Image src="/1on1.png" alt="1on1" width={100} height={100} />
      <div className='text-white text-2xl mt-4 text-center p-4'>Your app is being downloaded</div>
    </div >
  )
};

DeviceDetector.getLayout = getLayout
export default DeviceDetector;
