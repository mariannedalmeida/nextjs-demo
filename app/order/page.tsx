"use client";
import NavBar from "@/components/global/navbar";
import { Card } from "@/components/ui/card";
import { MenuCardMocks, MenuMocks } from "@/lib/mocks";
import Link from "next/dist/client/link";
import {
  Bike,
  BikeIcon,
  Minus,
  Package2Icon,
  PlusIcon,
  TruckIcon,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Order() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-3 min-h-screen gap-5 p-5 bg-orange-900">
        <Card className="ml-10 mt-10 bg-transparent p-4 col-span-2">
          <table className="text-white text-lg table-auto border-spacing-2 ">
            <thead>
              <tr className="bg-amber-500 rounded-2xl">
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {MenuCardMocks.map((m: any) => (
                <tr key={m.id}>
                  <td className="flex items-center gap-2 p-2">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                    {m.name}
                  </td>
                  <td className="p-2">{m.price}</td>
                  <td className="p-2 flex items-center gap-2">
                    <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                      <Minus className="text-white" size={15} />
                    </button>
                    <span>{count}</span>
                    <button
                      onClick={() =>
                        setCount(
                          count < m.stock ? count + 1 :m.quantity ,
                        )
                      }
                    >
                      <PlusIcon className="text-white" size={15}/>
                    </button>
                    
                  </td>
                  <td className="p-2">
                    {(parseFloat(m.price.slice(1)) * m.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="my-10 max-w-sm bg-transparent text-white">
          <table className="text-white text-lg table-auto border-spacing-2 w-full">
            <thead>
              <tr className=" rounded-2xl">
                <th className="p-2 text-center" colSpan={2}>
                  Order summary
                </th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Items</td>
                <td>
                  {MenuMocks.slice(0, 3).reduce(
                    (sum, m) => sum + m.quantity,
                    0,
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-2">Subtotal</td>
                <td>
                  $
                  {MenuMocks.slice(0, 3)
                    .reduce(
                      (sum, m) =>
                        sum + parseFloat(m.price.slice(1)) * m.quantity,
                      0,
                    )
                    .toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="p-2">Shipping</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td className="p-2">Taxes</td>
                <td>
                  $
                  {(
                    MenuMocks.slice(0, 3).reduce(
                      (sum, m) =>
                        sum + parseFloat(m.price.slice(1)) * m.quantity,
                      0,
                    ) * 0.08
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="p-2">Coupon discount</td>
                <td>$0.00</td>
              </tr>
            </tbody>
          </table>
          <Card className="bg-transparent">
            <div className="text-white text-lg">
              Total
              <span className="float-right">
                $
                {(
                  MenuMocks.slice(0, 3).reduce(
                    (sum, m) => sum + parseFloat(m.price.slice(1)) * m.quantity,
                    0,
                  ) * 1.08
                ).toFixed(2)}
              </span>
            </div>
            <div>
              <button className="bg-orange-400 rounded-2xl p-2 px-8 mx-14 text-white text-lg ">
                Proceed to checkout
              </button>
            </div>
          </Card>
        </Card>
        
        <div className=" mx-28 col-span-2 ">
          <button className="bg-transparent text-white p-2 rounded-2xl border mx-10">
            Coupon promo
          </button>
          <button className="bg-orange-400 p-2 rounded-2xl border text-white">
            Apply coupon
          </button>
          <Link href="#" className="text-white p-2 rounded-2xl underline mx-15">
            Clear shopping cart
          </Link>
        </div>
      </div>
    </div>
  );
}
