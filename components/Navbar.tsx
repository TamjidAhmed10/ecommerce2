const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between bg-gray-300">
          <div className="p-5">Ecommerce</div>
          <div className=" flex ">
            <div className=" p-5 hidden md:inline-block">Cart</div>
            <div className=" p-5 hidden md:inline-block">Cart</div>
            <div className="p-5 inline-block md:hidden">Button</div>
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
