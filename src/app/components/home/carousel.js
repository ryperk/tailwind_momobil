"use client";

import React from "react";
import { Carousel } from "flowbite-react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions"

export default function carousel() {
  
  const { width, height } = useWindowDimensions();

  console.log("width=" + width + " height=" + height);
    
  return (
    <div className="h-80 py-4 px-4">
      <Carousel slideInterval={5000}>
        <img
          src={`https://picsum.photos/seed/picsum/${width}/${height}`}
          alt="..."
        />
        <img
          src={`https://picsum.photos/seed/picsum/${width}/${height}`}
          alt="..."
        />
        <img
          src={`https://picsum.photos/seed/picsum/${width}/${height}`}
          alt="..."
        />
        <img
          src={`https://picsum.photos/seed/picsum/${width}/${height}`}
          alt="..."
        />
        <img
         src={`https://picsum.photos/seed/picsum/${width}/${height}`}
          alt="..."
        />
      </Carousel>
    </div>
  );
}