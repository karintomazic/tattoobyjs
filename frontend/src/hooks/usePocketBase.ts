"use client";

import { useState, useEffect } from "react";
import { fetchCollection } from "@/lib/pocketbase";
import type { CollectionName, Collections } from "@/types/pocketbase";

/** Loads all records of a collection. Starts as an empty list. */
export default function usePocketBase<Name extends CollectionName>(
  collectionName: Name,
): Collections[Name][] {
  const [data, setData] = useState<Collections[Name][]>([]);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const items = await fetchCollection(collectionName);
      if (!ignore) setData(items);
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, [collectionName]);

  return data;
}
