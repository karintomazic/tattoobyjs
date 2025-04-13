import PocketBase from 'pocketbase';

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
export const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL
);

export async function fetchCollection(collectionName, page = 1, perPage = 50) {
  try {
    const records = await pb.collection(collectionName).getList(page, perPage, {
      $autoCancel: false,
    });
    return records.items;
  } catch (err) {
    console.error(`Error fetching ${collectionName}:`, err);
    return [];
  }
}
