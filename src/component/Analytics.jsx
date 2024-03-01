import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4   ">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl  py-2   ">
            Manage Data Analytics Centrally
          </h1>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            ex maiores accusamus asperiores cupiditate minus consectetur
            mollitia voluptas unde? Sed enim velit aliquam error exercitationem
            quas nesciunt eveniet deleniti quia!{" "}
          </p>

          <button className="bg-black w-[200px] mx-auto text-[#00df9a] font-bold my-4 py-2 px-4 rounded md:mx-0  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
