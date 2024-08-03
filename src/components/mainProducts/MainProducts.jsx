import React from "react";
// import Links from "../links/Links";

import MainProduct from "../mainProduc/MainProduct";

const data = [
  {
    id: 1,
    title: "Mobile & Computing",
    links: [
      "Galaxy Z Flip6",
      "Galaxy Z Fold6",
      "Galaxy Watch Ultra",
      "Galaxy Buds3 Pro",
      "Galaxy Experience",
    ],
    bg: "src/assets/main-product/flip-6.avif",
    name: "Galaxy Z Flip6",
    discount:
      "Get up to $650 instant trade-in credit and double the storage on us with select colors.",
    clr: "black",
  },
  {
    id: 2,
    title: "TV & Audio",
    links: ["Samsung Neo QLED 8K", "TV + Soundbar bundles", "Q990D"],
    bg: "src/assets/main-product/samsung-tv.avif",
    name: "Discover new depths of detail",
    discount:
      "Buy an 85” Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K+.",
    clr: "white",
  },
  {
    id: 3,
    title: "Home Appliances",
    links: ["Bespoke Appliances", "Bespoke Refrigeretors", "Bespoke Loundry"],
    bg: "src/assets/main-product/samsung-home.avif",
    name: "Save on Bespoke all summer",
    discount:
      "Get up to $1,300 off select Bespoke models from America's #1 appliance brand.",
    clr: "black",
  },
  {
    id: 4,
    title: "Sustainability",
    links: [
      "Trade-in Recycling Program",
      "Certified Re-Newed",
      "How to recycle",
    ],
    bg: "src/assets/main-product/samsung-tv-oled.jpg",
    name: "Trade-in and save up to $100",
    discount: "We'll deliver your new TV and recycle your old TV for you.",
    clr: "black",
  },
];

const MainProducts = () => {
  // const links = [
  //   "For You",
  //   "Top Deals",
  //   "Mobile",
  //   "TV&Audio",
  //   "Home Appliances",
  //   "Computing",
  // ];
  return (
    <section className="bg-[#F4F4F4]">
      <div className="main-products">
        {data?.map((item, idx) => (
          <MainProduct
            key={idx}
            title={item.title}
            links={item.links}
            name={item.name}
            save={item.discount}
            bg={item.bg}
            clr={item.clr}
          />
        ))}
      </div>
    </section>
  );
};

export default MainProducts;
