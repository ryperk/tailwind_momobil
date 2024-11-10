"use client";

import React from "react";
import { Carousel } from "flowbite-react";

export default function carousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src="https://picsum.photos/seed/picsum/1280/320"
          alt="..."
        />
        <img
          src="https://picsum.photos/seed/picsum/1280/320"
          alt="..."
        />
        <img
          src="https://picsum.photos/seed/picsum/1280/320"
          alt="..."
        />
        <img
          src="https://picsum.photos/seed/picsum/1280/320"
          alt="..."
        />
        <img
         src="https://picsum.photos/seed/picsum/1280/320"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
