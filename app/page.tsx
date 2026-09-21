import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const menu = [
    {
      id: 1,
      name: "Classic Burger",
      description:
        "A timeless favorite with a juicy beef patty, lettuce, tomato, and our special sauce.",
      price: "$8.99",
      image:
        "https://get.pxhere.com/photo/burger-close-up-delicious-fast-food-food-photography-fresh-hamburger-junk-food-snack-tasty-unhealthy-1556239.jpg",
    },
    {
      id: 2,
      name: "Cheese Lover's Burger",
      description:
        "Loaded with melted cheddar, Swiss, and American cheese for the ultimate cheesy experience.",
      price: "$9.99",
      image:
        "https://images.pexels.com/photos/29250659/pexels-photo-29250659/free-photo-of-juicy-burger-with-melted-cheddar-cheese.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Bacon BBQ Burger",
      description:
        "Crispy bacon, tangy BBQ sauce, and a beef patty that will make your taste buds dance.",
      price: "$10.99",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVjb24lMjBiYnElMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
    },
     {
      id: 4,
      name: "Mushroom Swiss Burger",
      description:
        "Sautéed mushrooms and Swiss cheese on a perfectly grilled beef patty.",
      price: "$9.49",
      image:"https://insanelygoodrecipes.com/wp-content/uploads/2024/08/Homemade-Mushroom-Swiss-Burger.jpg",
    },
  ];
  return (
    <div className="relative min-h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/OIP.bHd_TEzctVO_2yHDEdsHcwHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
        alt=""
      />
      <NavBar />
      <section className="text-center text-white inset-0 z-10 relative mt-20 p-10">
        <h1 className="text-5xl text-white text-left">THE PERFECT BURGER</h1>
        <h2 className="text-5xl text-amber-500 text-left">IS NO LONGER</h2>
        <h2 className="text-5xl text-white text-left">A MYTH</h2>

        <p className="text-left text-sm italic font-serif">
          For years, the perfect burger felt like a legend. Not anymore. Fresh
          ingredients,
        </p>
        <p className="text-left text-sm italic font-serif">
          bold flavors, and real craftsmanship make our burgers the best in
          town!
        </p>
      </section>
      <button className="bg-amber-500 text-white font-bold py-2 px-4 rounded-lg transform transition duration-300 hover:scale-105 m-7 relative z-10">
        <Link href="/order">Order Now</Link>
      </button>
      <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transform transition duration-300 hover:scale-105 m-4 relative z-10">
        <Link href="/menu">View Menu</Link>
      </button>
      <section className="relative bg-orange-900 py-16 ">
        <h2 className="text-3xl font-serif text-white mb-10 text-center">
          Nos Plats Populaires
        </h2>

        <div className="grid grid-cols-4 space-y-10 ">
          {menu.map((m) => (
            <Card key={m.id} className="bg-white rounded-2xl mx-4 h-min">
              <img
                className="h-44 w-full rounded-sm object-cover"
                src={m.image}
                alt={m.name}
              />
              <p className="text-lg text-black font-semibold px-4">{m.name}</p>
              <p className="text-lg text-black font-bold px-5">{m.price}</p>
              <p className="text-sm text-gray-400 px-4 line-clamp-2">{m.description}</p>

              <div className="px-4">
                <button className="bg-amber-500 text-white font-bold py-2 rounded-lg transform transition duration-300 hover:scale-105 w-full my-6">
                  <a href="/order">Order Now</a>
                </button>
              </div>
            </Card>
          ))}
        </div>

        <Link
          href="/menu"
          className="inline-block mt-10 bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-105"
        >
          Voir tout le menu
        </Link>
      </section>
    </div>
  );
}
