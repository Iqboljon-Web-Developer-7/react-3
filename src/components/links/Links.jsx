import React from "react";

const Links = ({ links }) => {
  return links?.map((item, idx) => (
    <a
      key={idx}
      href="#"
      className="text-[.9rem] font-bold border-b-2 hover:border-b-black duration-100 text-nowrap"
    >
      {item}
    </a>
  ));
};

export default Links;
