import Links from "../links/Links";

const MainProduct = ({ title, links, name, save, bg, clr }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        color: clr,
      }}
      className="main-product pt-6 pb-7 min-h-[50rem] bg-cover bg-center flex flex-col justify-between "
    >
      <div className="main-product__top">
        <h2 className="text-4xl font-bold text-center mt-8">{title}</h2>
        <div className="links mt-6 flex justify-start md:justify-center items-center px-2 gap-[2vw] overflow-x-auto ">
          <Links links={links} />
        </div>
      </div>
      <div className="main-product__bottom text-center">
        <h2 className="name mt-8 text-5xl font-bold">{name}</h2>
        <p className="mt-2 font-[300]">{save}</p>
        <div className="buttons mt-3 w-full flex items-center justify-center gap-4">
          <a href="#">Learn more</a>
          <button className="btn rounded-full text-white px-6 scale-90">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
