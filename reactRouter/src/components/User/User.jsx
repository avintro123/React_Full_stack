import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      User: {userId}
    </div>
  );
}
