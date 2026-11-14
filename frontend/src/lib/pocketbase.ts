import PocketBase from "pocketbase";
import type {
  BaseRecord,
  CollectionName,
  Collections,
} from "@/types/pocketbase";

/** The PocketBase address. Locally with Docker, the port is added. */
export function getPocketBaseUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL ?? "";
  const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";

  return isDev
    ? `${baseUrl}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : baseUrl;
}

export const pb = new PocketBase(getPocketBaseUrl());

/** All records of one collection. Returns an empty list on error. */
export async function fetchCollection<Name extends CollectionName>(
  collectionName: Name,
  page = 1,
  perPage = 50,
): Promise<Collections[Name][]> {
  try {
    const records = await pb
      .collection(collectionName)
      .getList<Collections[Name]>(page, perPage, { requestKey: null });
    return records.items;
  } catch (err) {
    console.error(`Error fetching ${collectionName}:`, err);
    return [];
  }
}

/**
 * URL of a file stored on a record. `thumb` asks PocketBase for a resized
 * copy, e.g. "1080x0" = 1080px wide, height to match.
 */
export function fileUrl(
  record: BaseRecord,
  fileName: string,
  thumb = "1080x0",
): string {
  return `${getPocketBaseUrl()}/api/files/${record.collectionId}/${record.id}/${fileName}?thumb=${thumb}`;
}
