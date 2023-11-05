const buddyApiUrl = "https://buddy-api-msil.onrender.com";

export async function post(uri, data) {
  const res = await fetch(`${buddyApiUrl}${uri}`, {
    method: "POST",
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
  });
  return res;
}

export async function put(uri, data) {
  const res = await fetch(`${buddyApiUrl}${uri}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
}
