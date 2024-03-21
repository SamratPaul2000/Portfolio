const headerData = {
  logo: { src: "/assets/Logo-SA.png", alt: "Logo" },
  navigation: [
    { text: "Home", link: "/" },
    { text: "Tech Stack", link: "#tech-stack" },
    { text: "Projects", link: "#Projects" },
    { text: "Contact", link: "#contact" },
  ],
};

const Navbar = () => {
  return (
    <nav
      className=" text-grey-800 lg:py-2 lg:px-6 p-1 flex items-center justify-between sticky top-0  bg-white
    "
    >
      <div>
        <img
          src={headerData.logo.src}
          alt={headerData.logo.alt}
          className="lg:w-20 lg:h-20 w-18 h-16 rounded-full drop-shadow-lg"
        />
      </div>
      <ul className="flex items-center gap-6 lg:6">
        {headerData.navigation.map((item) => (
          <li key={item.text} className="">
            <a
              href={item.link}
              className="hover:bg-gradient-to-r hover:from-teal-500 hover:to-yellow-500 lg:px-3 lg:py-2 px-2 py-2 rounded-full font-medium hover:text-white text-sm lg:text-lg"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;