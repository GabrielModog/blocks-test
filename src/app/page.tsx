"use client";
import Blocks from "@/components/Blocks";
import { HEADER_TITLE, SECTION_TITLE } from "@/utils/constants";

import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main className="flex flex-col items-start grow">
      <section className="w-full">
        <div className="py-6 bg-white drop-shadow-md">
          <div className="mx-auto w-5/6">
            <Heading>{HEADER_TITLE}</Heading>
          </div>
        </div>
        <div className="container-lg mx-auto w-5/6">
          <h3 className="text-xl font-semibold mt-4 mb-2">{SECTION_TITLE}</h3>
          <Blocks />
        </div>
      </section>
    </main>
  );
}
