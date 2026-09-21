"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "@/components/global/navbar";
import { useRouter } from "next/navigation";
import { MenuMocks } from "@/lib/mocks";


export default function menu() {
  
  const router = useRouter();

  return (
    <div className="bg-orange-900 min-h-screen  ">
     <NavBar/>
      <h2 className="text-5xl font-serif text-white text-center my-16  ">
        Our Menu
      </h2>

      <div className="grid grid-cols-3 space-y-20  ">
        {MenuMocks.map((m) => (
          <Card key={m.id} className=" bg-white rounded-2xl mx-10 h-min">
            <img
              className="h-44 w-full rounded-sm  object-cover"
              src={m.image}
              alt="image"
            />
            <p className="text-lg text-black font-semibold px-4">
              {m.name}
              {}
            </p>
            <p className="text-lg text-black font-bold px-5">{m.price}</p>
            <p className="text-sm text-gray-400 px-4">{m.description}</p>
            
            
            <div className="px-4">
              <button className="bg-amber-500 text-white font-bold py-2 rounded-lg transform transition duration-300 hover:scale-105 w-full my-6" onClick={() => router.push(`/menu/${m.id}`)}>
               Order Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
