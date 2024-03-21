const Hero = () => {
  return (
    <div className="flex items-center justify-evenly pt-10 flex-wrap gap-4">
      
      <h1 className=" bg-white text-[#42446E] font-bold lg:text-5xl text-3xl">
        Hi👋, <br />
        My name is <br />{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-teal-500 text-transparent bg-clip-text font-bold">
          Samrat Paul
        </span>{" "}
        <br /> I develop things for web.
      </h1>
      <div className="bg-gradient-to-r from-teal-500 to-yellow-500 p-0 rounded-full ">
      <img
          className="h-object-cover rounded-full lg:w-[300px] w-[250px]"
          src="/assets/ME.png"
          alt=""
        />
      </div>
    </div>
    
  );
};

export default Hero;