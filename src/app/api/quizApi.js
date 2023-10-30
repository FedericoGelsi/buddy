import { post } from "./api";

export async function submitForm(quizResponses) {
  // {
  //     "userId": "65338e44dce6375103dd4eb4",
  //     "parentForm": [
  //         {
  //             "questionId": 1,
  //             "responseId": 3,
  //             "gravity": 3
  //         },
  //         {
  //             "questionId": 2,
  //             "responseId": 1,
  //             "gravity": 0
  //         }
  //     ]
  // }

  const res = await post("/parent_forms", quizResponses);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to save quiz data");
  }

  return res.json();
}
