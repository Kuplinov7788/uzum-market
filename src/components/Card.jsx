import React, { useEffect, useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";

const Card = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3002/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const basket = (id) => {
    const oldBasket = JSON.parse(localStorage.getItem("productbasket")) || [];
    const product = products.find((item) => item.id === id);
    if (!product) return;
    const newBasket = [...oldBasket, product];
    localStorage.setItem("productbasket", JSON.stringify(newBasket));
    console.log("Savatchaga qo‘shildi:", product.title);
  };

  return (
    <main>
      <section>
        <div className="container mx-auto w-[65%]">
          <div className="flex gap-[40px] flex-wrap justify-center ">
            {products.map((e) => (
              <div key={e.id} className="shadow-lg p-10 rounded-2xl">
                <div className="w-[232px] mt-4">
                  <img
                    src={e.thumbnail}
                    className="h-[309px]"
                    alt={e.title}
                  />
                  <p className="font-normal text-[12.5px]">{e.title}</p>
                  <p className="font-light text-[11px] text-[#8B8E99]">
                    ⭐️ 4.9 ({e.rating})
                  </p>
                  <p className="font-normal text-[11px] text-black bg-[#FFFF00] w-[95px] text-center rounded-md">
                    {e.discountedTotal}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-normal text-[#8B8E99]">
                        <del>{e.price}</del>
                      </p>
                      <p className="font-normal text-[14px]">{e.description}</p>
                    </div>
                    <button onClick={() => basket(e.id)}>
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
  );
};

export default Card;
