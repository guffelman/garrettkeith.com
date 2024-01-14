/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { set } from "zod";

interface CardProps {
  name: string;
  description: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ name, description, imgSrc }) => {
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [gleamPositionX, setGleamPositionX] = useState(0);
  const [gleamPositionY, setGleamPositionY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const padding = 10; // Padding in pixels

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    const x = event.clientX - (rect?.left ?? 0) - padding; //x position within the element.
    const y = event.clientY - (rect?.top ?? 0) - padding; //y position within the element.
    const width = (rect?.width ?? 0) + 2 * padding;
    const height = (rect?.height ?? 0) + 2 * padding;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRotation = 15; // Maximum rotation in degrees
    const rotateY = ((x - centerX) / centerX) * maxRotation;
    const rotateX = ((y - centerY) / centerY) * -maxRotation; // Invert to rotate correctly
    setRotateY(rotateY);
    setRotateX(rotateX);
    setGleamPositionX((x / width) * 100);
    setGleamPositionY((y / height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateY(0);
    setRotateX(0);
    setGleamPositionX(1000);
    setGleamPositionY(1000);
  };

  return (
    <div className="card" style={{ overflow: "hidden", position: "relative" }}>
      <div
        className="card-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ padding: `${padding}px`, margin: "20px" }}
      >
        <div
          className="card flex flex-row items-center space-y-4 rounded-lg bg-white p-6 shadow-lg"
          ref={cardRef}
          style={{
            transform: `perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          }}
        >
          <img
            alt={name}
            className="mr-6 rounded-full"
            height="100"
            src={imgSrc}
            style={{
              aspectRatio: "100/100",
              objectFit: "scale-down",
              objectPosition: "center top",
            }}
            width="100"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-lg text-gray-800">{description}</p>
            <div className="mt-4 flex gap-4">
            <Link
                className="btn inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white text-lg shadow-md sm:px-4 sm:py-2 sm:text-base xs:px-2 xs:py-1 xs:text-sm"
                href="https://cdn.gert.me/Garrett.Uffelman.Resume.pdf"
            >
                Download Resume
            </Link>
            <Link
                className="btn inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-white text-lg shadow-md sm:px-4 sm:py-2 sm:text-base xs:px-2 xs:py-1 xs:text-sm"
                href="https://www.linkedin.com/in/guffelman"
            >
                Connect with me
            </Link>
            </div>
          </div>
          <div
            className="card-gleam"
            style={{ left: `${gleamPositionX}%`, top: `${gleamPositionY}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
