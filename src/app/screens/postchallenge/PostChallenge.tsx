"use client";

import React from "react";
import "./styles/PostChallenge.css";
import ChallengeForm from "@/components/forms/ChallengeForm";
import { useRouter } from "next/navigation";

const PostChallenge: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (proyecto: any) => {
    console.log("Proyecto recibido:", proyecto);
    router.push("/detailchallenge");
  };

  return (
    <div className="container mt-4">
      <ChallengeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default PostChallenge;
