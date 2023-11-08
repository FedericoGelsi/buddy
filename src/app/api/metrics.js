import { get } from "./api";

export async function metrics(userId) {
  const res = await get("/metrics/" + userId);
  console.log(res, res.json())
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
