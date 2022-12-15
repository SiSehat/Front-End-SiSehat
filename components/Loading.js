import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Loading() {
  const router = useRouter();

  const [idToast, setIdToast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => {
        setIdToast(toast.loading('Tunggu sebentar .....'))
        if (url !== router.asPath) setLoading(true)
      };
      
      const handleComplete = (url) => {
        toast.update(idToast, 
            { render:'Success',  type:'success', isLoading: false, autoClose: 2000 }
        )
        if (url === router.asPath) setLoading(false)
      };

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
}