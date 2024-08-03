import React from "react";

import img1 from "../../assets/products/wide-screen.webp";
import img2 from "../../assets/products/fold-6.avif";
import img3 from "../../assets/products/flip-6.avif";
import img4 from "../../assets/products/puds-pro-grey.avif";
import img5 from "../../assets/products/loundry-machine.avif";
import img6 from "../../assets/products/galaxy-watch-ultra.avif";
import Links from "../links/Links";

const Products = () => {
  const links = [
    "For You",
    "Top Deals",
    "Mobile",
    "TV&Audio",
    "Home Appliances",
    "Computing",
  ];
  const productsData = [
    {
      id: 1,
      img: img1,
      title: '49" Odyssey OLED G9 Gaming Monitor',
      save: "Get $720 off.",
    },
    {
      id: 2,
      img: img2,
      title: "Galaxy Z Fold6",
      save: "Save up to $1,440",
    },
    {
      id: 3,
      img: img3,
      title: "Galaxy Z Flip6",
      save: "Save Up To $650",
    },
    {
      id: 4,
      img: img4,
      title: "Galaxy Buds3 Pro",
      save: "Save up to $100",
    },
    {
      id: 5,
      img: img5,
      title: `Bespoke Loundry Combo`,
      save: `Get $1,100 off and a Jet 60 stick vacuum on us.`,
    },
    {
      id: 6,
      img: img6,
      title: "Galaxy Watch Ultra",
      save: "Save up to $350",
    },
  ];

  return (
    <section className="wrapper products text-center mt-10">
      <h2 className="text-4xl font-bold">
        Shop all latest offers and innovations
      </h2>
      <a
        href="#"
        className="block mt-4 border-b-2 w-fit mx-auto hover:border-b-black duration-100"
      >
        View all offers
      </a>
      <div className="links mt-8 flex justify-start sm:justify-center items-center px-2 gap-[2vw] overflow-x-auto ">
        <Links links={links} />
      </div>
      <div className="products__container mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        {productsData?.map((item) => {
          return (
            <div
              className="product relative group cursor-pointer overflow-hidden rounded-3xl"
              key={item.id}
            >
              <img
                src={item.img}
                alt="samsung product"
                className="group-hover:scale-105 duration-300"
              />
              <div className="info absolute bottom-0 pb-6 md:pb-8 left-0 right-0 overflow-hidden">
                <h2 className="text-[1.1rem] xl:text-[1.2rem] font-bold leading-6">
                  {item.title}
                </h2>
                <p className="text-[.7rem] mt-3 text-[#0C0C0C] relative -top-0 group-hover:opacity-0 group-hover:-top-3 transition-all duration-300">
                  {item.save}
                </p>
                <button className="btn mx-auto w-fit rounded-full px-7 text-white absolute transition-all duration-300 -bottom-0 opacity-0 group-hover:bottom-2 group-hover:opacity-100 left-0 right-0 delay-75 scale-75 lg:scale-90 hover:opacity-70">
                  Buy now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
