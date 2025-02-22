import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { certificates } from "@/data"; // Import certificate data

const Certificate = () => {
  return (
    <section id="certificates" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>

      <div className="flex justify-center mt-10">
        <InfiniteMovingCards
          items={certificates}
          speed="slow" // Adjust speed (slow, normal, fast)
          direction="left" // Slide direction (left or right)
        />
      </div>
    </section>
  );
};

export default Certificate;
