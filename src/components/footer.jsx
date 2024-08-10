import React from "react";

import footer1 from "../images/footer1.jpg";
import footer2 from "../images/footer2.jpg";
import footer3 from "../images/footer3.jpg";
import footer4 from "../images/footer4.jpg";
import footer5 from "../images/footer5.jpg";
import footer6 from "../images/footer1.jpg";
import footer7 from "../images/footer2.jpg";
import footer8 from "../images/footer3.jpg";
import footer9 from "../images/footer4.jpg";
import footer10 from "../images/footer5.jpg";
import footer11 from "../images/cash1.jpg";
import footer12 from "../images/cash2.jpg";
import footer13 from "../images/cash3.jpg";
import footer14 from "../images/cash4.jpg";
import footer15 from "../images/cash5.jpg";
import footer16 from "../images/cash6.jpg";
import footer17 from "../images/cash7.jpg";
import footer18 from "../images/cash8.jpg";
import footer19 from "../images/cash9.jpg";
import footer20 from "../images/cash10.jpg";
import footer21 from "../images/cash11.jpg";
import footer22 from "../images/scanerone.jpg";
import footer23 from "../images/app1.jpg";
import footer24 from "../images/app2.jpg";
import footer25 from "../images/app3.jpg";
import footer26 from "../images/app13.jpg";
import footer27 from "../images/app6.jpg";
import footer28 from "../images/app7.jpg";
import footer29 from "../images/app8.jpg";
import footer30 from "../images/app9.jpg";
import footer31 from "../images/app10.jpg";

const Footer = () => {
  const data1 = [
    {
      img: footer1,
      title: "Pakistan",
    },
    {
      img: footer2,
      title: "Bangladesh",
    },
  ];
  const data2 = [
    {
      img: footer3,
      title: "Sri Lanka",
    },
    {
      img: footer4,
      title: "Myanmar",
    },
  ];
  const data3 = [
    {
      img: footer5,
      title: "Nepal",
    },
  ];

  return (
    <div className="w-full mt-8 px-4 sm:px-6 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-full flex justify-center mb-8">
          <div className="flex flex-col text-red-800 text-xs md:text-sm lg:text-base font-medium border-2 border-red-800 p-2">
            <button>LOAD MORE</button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-red-800 text-xl font-medium mb-4">
            Customer Care
          </h2>
          <ul className="font-normal text-sm">
            <li>Help Center</li>
            <li>How to buy</li>
            <li>Corporate</li>
            <li>Return & Refunds</li>
            <li>Daraz Shop</li>
            <li>Contact Us</li>
            <li>Purchase Protection</li>
            <li>Daraz Pick Up Points</li>
          </ul>
          <h2 className="text-red-800 text-xl font-medium mt-8">
            Make Money With Us
          </h2>
          <ul className="font-normal text-sm">
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Join Daraz Affiliate Program</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-red-800 text-xl font-medium mb-4">Daraz</h2>
          <ul className="font-normal text-sm">
            <li>About us</li>
            <li>Digital Payments</li>
            <li>Daraz Donates</li>
            <li>Daraz Blog</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>NTN Number: 123456</li>
            <li>STRN Number: 5678789</li>
            <li>Online Shopping App</li>
            <li>Online Grocery Shopping</li>
            <li>Daraz Exclusive</li>
          </ul>
        </div>
        {/* ////////////////////////////////////////////////////// */}
        <div className="flex flex-col text-center">
          <h2 className="text-red-800 text-xl font-medium mb-4">
            Daraz International
          </h2>
          <div className="flex flex-col text-center items-center">
            <div className="flex gap-2 text-center ">
              <img src={footer6} alt="" className="w-4 ml-1" />
              <p className="text-sm">Pakistan</p>
              <img src={footer7} alt="" className="w-4 ml-1" />
              <p className="text-sm">Bangladash</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src={footer8} alt="" className="w-6" />
              <p className="text-sm">Srilanka</p>
              <img src={footer9} alt="" className="w-6" />
              <p className="text-sm">Myanmar</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src={footer10} alt="" className="w-6" />
              <p className="text-sm">Nepal</p>
            </div>
          </div>
          {/* //////// */}
          <h2 className="text-red-800 text-xl font-medium mt-8">
            Payment Methods
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <img src={footer11} alt="" className="w-14 h-10" />
            <img src={footer12} alt="" className="w-14 h-10" />
            <img src={footer13} alt="" className="w-14 h-10" />
            <img src={footer14} alt="" className="w-14 h-10" />
            <img src={footer15} alt="" className="w-14 h-10" />
            <img src={footer16} alt="" className="w-14 h-10" />
            <img src={footer17} alt="" className="w-14 h-10" />
            <img src={footer18} alt="" className="w-14 h-10" />
            <img src={footer19} alt="" className="w-14 h-10" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-red-800 text-xl font-medium mt-8">
              Verified Methods
            </h2>
            <div className="flex gap-2 mt-4">
              <img src={footer20} alt="" className="w-14 h-10" />
              <img src={footer21} alt="" className="w-14 h-10" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="text-red-800 text-xl font-medium mb-4">
            Exclusive Deals and Offers
          </h2>
          <div className="flex flex-col items-center lg:flex-row  gap-4 mb-6 ">
            <img src={footer22} alt="" className="lg:w-full w-1/2 " />

            <div className="flex flex-col gap-2 ">
              <img src={footer23} alt="" className="w-32" />
              <img src={footer24} alt="" className="w-32" />
              <img src={footer25} alt="" className="w-32" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={footer26} alt="" className="h-14 w-20" />
            <img src={footer27} alt="" className="h-14 w-60" />
          </div>
          <h2 className="text-red-800 text-xl font-medium mt-8">Follow Us</h2>
          <div className="flex justify-between gap-4 mt-6">
            <img src={footer28} alt="" className="h-14 w-14" />
            <img src={footer29} alt="" className="h-14 w-14" />
            <img src={footer30} alt="" className="h-14 w-14" />
            <img src={footer31} alt="" className="h-14 w-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
