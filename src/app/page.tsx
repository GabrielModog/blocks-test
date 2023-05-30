"use client";
import { useEffect, useState } from "react";

import Blocks from "@/components/Blocks";
import { HEADER_TITLE, SECTION_TITLE } from "@/utils/constants";
import Button from "@/components/Button";

export default function Home() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://test-candidaturas-front-end.onrender.com/families?skip=0&take=10"
    )
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });
  }, []);

  return (
    <main className="flex flex-col items-start grow">
      <section className="w-full">
        <div className="py-8 bg-white drop-shadow-md">
          <h1 className="text-3xl font-bold text-black mx-auto w-5/6">
            {HEADER_TITLE}
          </h1>
        </div>
        <div className="container-lg py-4 mx-auto w-5/6">
          <h3 className="text-xl font-semibold py-4">{SECTION_TITLE}</h3>
          <Blocks list={state} />
        </div>
      </section>
    </main>
  );
}
