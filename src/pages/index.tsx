/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import Head from 'next/head'
import Link from "next/link";
import { JSX, SVGProps, useEffect } from "react";
import Card from "../components/card";
export default function Component() {
  useEffect(activateKonamiCode, []);
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Head>
        <title>GarrettKeith.com</title>
        <link rel="icon" href="https://cdn.gert.me/favicon.ico" />
        <script async src="https://umami.gert.me/script.js" data-website-id="5ba1b546-432d-4109-a878-c0eb9c142001"></script>
      </Head>
      <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
        <div className="text-2xl font-bold">Garrett Uffelman</div>
        <div className="text-sm">
          Bridging the gap between technology and business objectives
        </div>
      </header>
      <main className="flex-1 bg-gray-100">
        <section className="flex h-[500px] items-center justify-center text-center">
          <Card
            name="Garrett Uffelman"
            description="Discover my skills, experience, and projects"
            imgSrc="/me.jpg"
          />
        </section>
        <section className="flex sm:justify-center overflow-x-scroll sm:overflow-hidden p-6">
          <div className="flex gap-4">
            <div className="flex w-[200px] transform flex-col items-center rounded-md bg-white p-4 shadow-md transition duration-500 ease-in-out hover:scale-110">
              <CodeIcon className="mb-4 h-12 w-12" />
              <h2 className="text-xl font-bold">Frontend Development</h2>
              <p className="text-sm text-gray-600">
                Building interactive user interfaces using modern JavaScript
                frameworks
              </p>
            </div>
            <div className="flex w-[200px] transform flex-col items-center rounded-md bg-white p-4 shadow-md transition duration-500 ease-in-out hover:scale-110">
              <DatabaseIcon className="mb-4 h-12 w-12" />
              <h2 className="text-xl font-bold">Backend Development</h2>
              <p className="text-sm text-gray-600">
                Designing and implementing server-side logic and database
                architecture
              </p>
            </div>
            <div className="flex w-[200px] transform flex-col items-center rounded-md bg-white p-4 shadow-md transition duration-500 ease-in-out hover:scale-110">
              <LayoutIcon className="mb-4 h-12 w-12" />
              <h2 className="text-xl font-bold">UI/UX Design</h2>
              <p className="text-sm text-gray-600">
                Creating intuitive and aesthetically pleasing user interfaces
              </p>
            </div>
            <div className="flex w-[200px] transform flex-col items-center rounded-md bg-white p-4 shadow-md transition duration-500 ease-in-out hover:scale-110">
              <CloudIcon className="mb-4 h-12 w-12" />
              <h2 className="text-xl font-bold">Cloud Computing</h2>
              <p className="text-sm text-gray-600">
                Managing and deploying applications on cloud platforms
              </p>
            </div>
          </div>
        </section>
        <section className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center rounded-md bg-white p-4 shadow-md">
              <img
                alt="Custom Truck One Source"
                className="mr-4"
                height="50"
                src="/ctos.png"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <div>
                <h3 className="text-lg font-bold">
                  Salesforce Systems Analyst at Custom Truck One Source
                </h3>
                <p className="text-sm text-gray-600">
                  Salesforce Development; Lightning Web Components, Apex, SOQL &
                  SQL, Lambda
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-md bg-white p-4 shadow-md">
              <img
                alt="Nesco Rentals"
                className="mr-4"
                height="50"
                src="/nesco.jpg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <div>
                <h3 className="text-lg font-bold">
                  Application Specialist at Nesco Rentals
                </h3>
                <p className="text-sm text-gray-600">
                  ERP Support & Enhancements; SQL Queries, Javascript, HTML
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-md bg-white p-4 shadow-md">
              <h3 className="text-lg font-bold">
                Salesforce Service Cloud Implementation
              </h3>
              <p className="text-sm text-gray-600">
                Implemented Salesforce Service Cloud within a $2b+ company to
                streamline customer communication, equipment repair, and call in
                center operations.
              </p>
            </div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <h3 className="text-lg font-bold">Serverless Audio Converter</h3>
              <p className="text-sm text-gray-600">
                Lambda Functions to convert call in center recordings to a
                web-supported format.
              </p>
            </div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <h3 className="text-lg font-bold">Agent State Component</h3>
              <p className="text-sm text-gray-600">
                Salesforce Component to show users currently logged into the
                phone system with their current status. Used vendor REST &
                Websocket APIs
              </p>
            </div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <h3 className="text-lg font-bold">Address Validation</h3>
              <p className="text-sm text-gray-600">
                Complex Address Validation for user entry within record creation
                form.
              </p>
            </div>
          </div>
        </section>
        <section className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="rounded-md bg-white p-4 shadow-md">
            <h3 className="text-lg font-bold">
              Salesforce Administrator Certification
            </h3>
            <p className="text-sm text-gray-600">Obtained 2021</p>
          </div>
        </section>
        <section className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Testimonials</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-md bg-white p-4 shadow-md">
              <p className="text-sm text-gray-600">
                Garrett is an awesome developer!
              </p>
              <p className="mt-2 text-sm font-bold">
                - Fiona, Garrett&#39;s Dog
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 p-6">
          <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
          <p className="text-lg">Email: garrett@garrettkeith.com</p>
          <p className="text-lg">Telegram: @guffelman</p>
          <div className="mt-4 flex space-x-4">
            <Link
              className="text-blue-500"
              href="https://www.linkedin.com/in/guffelman/"
            >
              LinkedIn
            </Link>
            <Link
              className="text-blue-500"
              href="https://www.github.com/guffelman"
            >
              GitHub
            </Link>
            <Link
              className="text-blue-500"
              href="https://www.x.com/garrettuffelman"
            >
              X
            </Link>
          </div>
        </section>
      </main>
      <footer className="flex h-16 items-center justify-center bg-gray-900 px-6 text-white">
        <p className="text-sm">
          © 2024-2025 Garrett Uffelman. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const activateKonamiCode = () => {
  let konamiIndex = 0;
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  const keydownHandler = (event: { key: string | undefined }) => {
    if (event.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        alert(
          "That's an odd combo to enter into a website... 🎉 \nSince you found this, you should definitely hire me. I think we'd get along great.",
        );
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  };

  window.addEventListener("keydown", keydownHandler);

  // Cleanup function to remove the event listener when the component unmounts
  return () => {
    window.removeEventListener("keydown", keydownHandler);
  };
};

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function LayoutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}
