import { useState, useEffect } from 'react';
import { fetchCollection } from '../lib/pocketbase';

export default function usePocketBase(collectionName) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchCollection(collectionName);
      setData(items);
    };
    fetchData();
  }, [collectionName]);

  return data;
}
