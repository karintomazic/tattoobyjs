export default function providePocketBaseUrl() {
  const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";

  return isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL;
}
