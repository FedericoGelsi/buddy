import { post } from "./api";

export async function submitForm(identikitResponses) {
  // body:
  // {
  //     "userId": "653ee8a348d9007e5d810902",
  //     "childName": "Juan4",
  //     "identikit": [
  //         {
  //             "score": 3,
  //             "maxScore": 5
  //         },
  //         {
  //             "score": 2,
  //             "maxScore": 2
  //         },
  //         {
  //             "score": 0,
  //             "maxScore": 2
  //         },
  //         {
  //             "score": 3,
  //             "maxScore": 3
  //         },
  //         {
  //             "score": 0,
  //             "maxScore": 3
  //         }
  //     ]
  // }

  const res = await post("/identikits", identikitResponses);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to save identikit data");
  }

  return res.json();

  //   RESPUESTA:
  // {
  // 	"_id": "653eefb2e27ae8459e3a65e1",
  // 	"firstName": "Juan",
  // 	"lastName": "Perez",
  // 	"email": "juanperez153@gmailmock.com",
  // 	"children": [
  // 		{
  // 			"firstName": "Juan4",
  // 			"lastName": "PerezJ2",
  // 			"activities": {
  // 				"identikit": [
  // 					{
  // 						"date": "10/2023",
  // 						"responses": [
  // 							{
  // 								"score": 3,
  // 								"maxScore": 5
  // 							},
  // 							{
  // 								"score": 2,
  // 								"maxScore": 2
  // 							},
  // 							{
  // 								"score": 0,
  // 								"maxScore": 2
  // 							},
  // 							{
  // 								"score": 3,
  // 								"maxScore": 3
  // 							},
  // 							{
  // 								"score": 0,
  // 								"maxScore": 3
  // 							}
  // 						],
  // 						"totalScore": 8,
  // 						"totalPercentage": 0.53
  // 					},
  // 					{
  // 						"date": "10/2023",
  // 						"responses": [
  // 							{
  // 								"score": 3,
  // 								"maxScore": 5
  // 							},
  // 							{
  // 								"score": 2,
  // 								"maxScore": 2
  // 							},
  // 							{
  // 								"score": 0,
  // 								"maxScore": 2
  // 							},
  // 							{
  // 								"score": 3,
  // 								"maxScore": 3
  // 							},
  // 							{
  // 								"score": 0,
  // 								"maxScore": 3
  // 							}
  // 						],
  // 						"totalScore": 8,
  // 						"totalPercentage": 0.53
  // 					}
  // 				]
  // 			}
  // 		}
  // 	],
  // 	"activities": {
  // 		"parentForm": []
  // 	},
  // 	"password": "123",
  // 	"__v": 0
  // }
}
