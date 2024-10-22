// src/pages/[uid].tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserPage = () => {
  const router = useRouter();
  const { query, isReady } = router;
  const H5_URL = process.env.NEXT_PUBLIC_H5_URL + "";

  useEffect(() => {
    if (isReady) {
      router.push(H5_URL + `?from=${query.from}`);
      // router.push(`https://localhost:3001?from=${query.from}`);
      const from = query.from;
      console.log(from)
    }
  }, [isReady]);

  return (
    <div>
      {/* <div>User ID Page</div> */}
      {/* {from ? <p>Your User ID is: {from}</p> : <p>Loading...</p>} */}
    </div>
  );
};

export default UserPage;