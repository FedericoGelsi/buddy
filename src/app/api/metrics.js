import { get } from "./api";

export async function metrics(userId) {
  let res;
  await get("/metrics/" + userId)
  .then((response) => response.json())
  .then((json) => {
    res = json;
  });
  
  return res;
}
