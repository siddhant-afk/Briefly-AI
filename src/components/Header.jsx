function Header() {
  return (
    <header className="header-section flex justify-center">
      <div className="header-content bg-gray-50 flex flex-col items-center justify-center rounded-lg mt-10">
        <h3 className="uppercase text-center font-light tracking-widest">
          Welcome to briefly
        </h3>
        <p className="text-3xl font-bold text-center mt-4 w-200">
          Discover headlines 📰 that spark{" "}
          <span className="text-red-500 font-extrabold">curiosity</span> 🔍,{" "}
          <span className="text-red-500 font-extrabold">understanding</span> 📕,
          and <span className="text-red-500 font-extrabold">impact</span> 🎯
        </p>
      </div>
    </header>
  );
}

export default Header;
