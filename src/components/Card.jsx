import React from "react";
import { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
const Card = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    setProducts(data);
  };

  getProducts();
  return (
    <div>
      <main>
        <section>
          <div className="container mx-auto w-[65%]">
            <div className="flex gap-[40px] flex-wrap justify-center ">
              {products.map((e) => (
                <div key={e.id} className="shadow-lg p-10 rounded-2xl">
                  <div className="w-[232px] mt-4 max-[1029px]:w-[210px]  max-[1029px]:h-[280px] max-[930px]:w-[190px] max-[550px]:w-[170px]">
                    <img
                      src={e.thumbnail}
                      className="h-[309px] max-[1029px]:h-[280px] max-[930px]:h-[250px] max-[550px]:h-[220px]"
                      alt=""
                    />
                    <p className="font-normal text-[12.5px] w-[215px]">
                      {e.title}
                    </p>
                    <p className="font-light text-[11px] text-[#8B8E99]">
                      ⭐️ 4.9 ({e.rating})
                    </p>
                    <p className="font-normal text-[11px] text-black bg-[#FFFF00] w-[95px] text-center  rounded-md">
                      {e.discountedTotal}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-normal text-[#8B8E99]">
                          <del>{e.price}</del>
                        </p>
                        <p className="font-normal text-[14px]">
                          {e.description}
                        </p>
                      </div>
                      <button id="basket${element.id}">
                        <RiShoppingBagLine />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Card;
