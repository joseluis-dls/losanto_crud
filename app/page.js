import Image from "next/image";
import ListPerfume from "@/components/ListPerfume";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">Next.js 14 Node Express CRUD | MySQL </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link
          href="/perfumes/create/"
          className="btn btn-primary">
          Add New Perfume
          </Link>
        </div>
        <Suspense fallback="Loading...">
          <ListPerfume/>
        </Suspense>
      </div>
    </div>
  );
}
