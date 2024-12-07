import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to HealLine, where patient-centered care and advanced
            medical expertise come together. Our team is dedicated to providing
            high-quality, compassionate healthcare in a comfortable and safe
            environment. From preventive services to specialized treatments, we
            are here to support every step of your health journey.
          </p>
        </div>
        {/* middle */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right side */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 1234567890</li>
            <li>healline123@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyright text */}
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 HealLine. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
