import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={require("../public/profilePicture.jpg")}
            alt="Alex Profile Picture"
            width="192"
            height="192"
            quality={95}
            priority={true}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
