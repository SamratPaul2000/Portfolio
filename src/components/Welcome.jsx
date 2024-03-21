import React from 'react'

const Welcome = () => {
return (
    <div>
    <div className="pt-20 pb-4 justify-center flex text-center">
        <h1 className="leading-none  text-[#42446E] font-bold text-[60px] lg:text-[80px] animate-fade-down animate-duration-5000 animate-delay-100">
        Welcome to My <br />{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-teal-500 text-transparent bg-clip-text font-bold">
        Portfolio
        </span>{" "}
        </h1>
    </div>
    </div>
)
}

export default Welcome