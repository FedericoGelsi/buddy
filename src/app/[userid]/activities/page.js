import React from "react";
import ActivitiesHome from "./ActivitiesHome";
export default function Page({ params }) {
  return <ActivitiesHome userid={params.userid} />;
}
