const buddyApiUrl = "https://buddy-api-msil.onrender.com";

export async function post(uri, data) {
  const res = await fetch(`${buddyApiUrl}${uri}`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
}

export async function get(uri) {
  return await fetch(`${buddyApiUrl}${uri}`);
}

export async function remove(uri) {
  const res = await fetch(`${buddyApiUrl}${uri}`, {
    method: "DELETE",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
  });
  return res;
}

export async function put(uri, data) {
  const res = await fetch(`${buddyApiUrl}${uri}`, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
}
