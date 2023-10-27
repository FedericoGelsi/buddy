import { post } from "./api";
export async function createParent(parent) {
  // PARENT JSON
  // {
  //     "firstName": "Juan",
  //     "lastName": "Perez",
  //     "email": "juanperez3@gmailmock.com",
  //     "children": [],
  //     "activities": {},
  //     "password": "123"
  // }
  const uri = "/user";
  const res = await post(uri, parent);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to create profile data");
  }

  return res.json();
}

export async function createChildren(children) {
  // CHILDREN
  // {
  //     "firstName": "Juan",
  //     "lastName": "PerezJ2",
  //     "parentIds": ["65338e44dce63751dd4eb4"],
  //     "activities": {}
  // }
  const uri = "/user/child";
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const res = await post(uri, children);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to create profile data");
  }

  return res.json();
}
