'use client';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    toast.error(
      (t) => (
        <span
          className='cursor-pointer'
          onClick={() => {
            toast.dismiss(t.id), reset();
          }}
        >
          {error.message}
        </span>
      ),
      {
        position: 'top-right',
        style: { background: '#18181b', color: '#f4f4f5' },
      }
    );
    console.error(error);
  }, [error, reset]);

  return <></>;
}
