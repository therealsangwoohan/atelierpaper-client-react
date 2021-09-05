import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const res = await fetch(url);
      setData(await res.json());
      setIsPending(false);
    } catch (err) {
      setError(err.message);
    }
  }, [url]);

  return { error, isPending, data };
}
