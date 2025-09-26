import React, { useState } from "react";

const Admin = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const postProduct = async (e) => {
    e.preventDefault(); // forma refresh bo‘lmasligi uchun
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price,
          total,
          thumbnail,
        }),
      });

      if (response.ok) {
        alert("Mahsulot qo‘shildi ✅");
        setTitle("");
        setPrice("");
        setTotal("");
        setThumbnail("");
      } else {
        alert("Xatolik yuz berdi ❌");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start p-4">
        {activePage === "dashboard" && (
          <h1 className="text-2xl font-bold">📊 Dashboard</h1>
        )}

        {activePage === "add-product" && (
          <div className="w-full max-w-md bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">🛒 Mahsulot qo‘shish</h2>
            <form className="flex flex-col gap-3" onSubmit={postProduct}>
              <input
                type="text"
                placeholder="Mahsulot nomi"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Narxi"
                className="input input-bordered w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Sifati"
                className="input input-bordered w-full"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
              <input
                type="text"
                placeholder="Asosiy narx"
                className="input input-bordered w-full"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Qo‘shish
              </button>
            </form>
          </div>
        )}

        {activePage === "products" && (
          <div>
            <h2 className="text-xl font-semibold">📦 Barcha mahsulotlar</h2>
            <ul className="list-disc pl-6">
              <li>Mahsulot 1</li>
              <li>Mahsulot 2</li>
              <li>Mahsulot 3</li>
            </ul>
          </div>
        )}

        {activePage === "orders" && (
          <h2 className="text-xl font-semibold">🧾 Buyurtmalar</h2>
        )}

        {activePage === "users" && (
          <h2 className="text-xl font-semibold">👤 Foydalanuvchilar</h2>
        )}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-4"
        >
          Open drawer
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-2">
          <li>
            <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => setActivePage("add-product")}>
              Mahsulot qo‘shish
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage("products")}>
              Barcha mahsulotlar
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage("orders")}>Buyurtmalar</button>
          </li>
          <li>
            <button onClick={() => setActivePage("users")}>
              Foydalanuvchilar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
