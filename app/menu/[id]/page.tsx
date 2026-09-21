"use client";
import NavBar from "@/components/global/navbar";
import { Card } from "@/components/ui/card";
import { MenuCardMocks, MenuMocks } from "@/lib/mocks";
import {
  Bike,
  BikeIcon,
  Minus,
  Package2Icon,
  PlusIcon,
  TruckIcon,
  User,
} from "lucide-react";
import { useParams } from "next/dist/client/components/navigation";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";

export default function MenuDetails() {
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState<any>();
  const params = useParams();
  const id = params.id as string;
  console.log(MenuCardMocks);

  useEffect(() => {
    setDetails(MenuMocks.find((m) => m.id === parseInt(id)));
  }, [id]);

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 h-screen space-x-10 px-5 bg-orange-900 ">
        
        <Card className="bg-transparent my-16">
          <img className=" h-96 " src={details?.image} alt="image" />
        </Card>
        <Card className="bg-transparent text-white my-10">
          <h2 className="font-bold text-4xl  ">{details?.name}</h2>
          <p className="pb-5 ">{details?.description}</p>
          <Card className="bg-transparent text-white">
            <h2 className="text-4xl">{details?.price}</h2>
          </Card>
          <Card className="bg-transparent text-white  ">
            <div className="flex gap-x-10 items-center">
              <div className="flex gap-x-5 rounded-2xl p-2 border border-white w-32 justify-center items-center">
                <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                  <Minus className="text-white" />
                </button>

                <span>{count}</span>

                <button
                  onClick={() =>
                    setCount(
                      count < details?.stock ? count + 1 : details?.stock,
                    )
                  }
                >
                  <PlusIcon className="text-white" />
                </button>
              </div>
              <p>Only {details?.stock} products available</p>
            </div>

            <br />
            <div className="flex gap-x-10 ">
              <button className="bg-amber-400 rounded-2xl p-3 text-black">
                buy Now
              </button>
              <button onClick={() =>MenuCardMocks.push(details)} className="bg-amber-100 text-black rounded-2xl p-3 ">
                add to cart
              </button>
            </div>
                  
          </Card>
          <div className="flex gap-1 items-center ">
            <TruckIcon className="text-white text-2xl" />
            <p className="font-bold text-xl"> Delivery available</p>
          </div>
          <div className=" px-8 -mt-3">
            <Link className="underline text-shadow-gray-300" href="/delivery">
              Enter your delivery details
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
