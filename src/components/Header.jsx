import React from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
const Header = () => {
  return (
    <div className="container mx-auto w-[70%] max-w-[100%]">
      <header className="w-full bg-white ">
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>
              📍 Shahar: <span className="font-semibold">Toshkent</span>
            </span>
            <span>Topshirish punktlari</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</span>
            <a href="#" className="hover:underline">
              Savol-javoblar
            </a>
            <a href="#" className="hover:underline">
              Buyurtmalarim
            </a>
            <span>🇺🇿 O‘zbekcha</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-around px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">uzum</span>
            <span className="text-2xl font-bold text-gray-800">market</span>
          </div>

          {/* Katalog + search */}
          <div className="flex items-center gap-3 w-1/2">
            <button className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-200 transition">
              📂 Katalog
            </button>
            <div className="flex items-center border rounded-lg w-full overflow-hidden">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
                className="px-3 py-2 w-full outline-none"
              />
              <button className="px-3 bg-gray-100 hover:bg-gray-200">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-purple-600"
            >
              <User size={20} /> Kirish
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-purple-600"
            >
              <Heart size={20} /> Saralangan
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-purple-600"
            >
              <ShoppingCart size={20} /> Savat
            </a>
          </div>
        </div>

        {/* Nav menu */}
        <nav className="flex gap-6 px-6 py-3 text-sm text-gray-700">
          <a href="#" className="text-red-500 font-semibold">
            Muddati to‘lov
          </a>
          <a href="#">Elektronika</a>
          <a href="#">Maishiy texnika</a>
          <a href="#">Kiyim</a>
          <a href="#">Poyabzallar</a>
          <a href="#">Aksessuarlar</a>
          <a href="#">Go‘zallik va parvarish</a>
          <a href="#">Salomatlik</a>
          <a href="#">Uy-ro‘zg‘or buyumlari</a>
          <a href="#">Qurilish va ta’mirlash</a>
          <a href="#">Yana ▾</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
