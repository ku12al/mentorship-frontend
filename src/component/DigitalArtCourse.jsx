import React from "react";
import { FaRegUserCircle, FaPlayCircle } from "react-icons/fa";
import { FiRotateCw } from "react-icons/fi";
import { CiAt } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { RiCoinsLine } from "react-icons/ri";
import { SiCodementor, SiMoleculer } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { PiMapPinArea, PiEyesFill } from "react-icons/pi";
import { TbWorldShare } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { LuDatabaseBackup } from "react-icons/lu";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineCalendar } from "react-icons/hi2";
import { RiFileUserLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const benefits = [
  {
    icon: <TbWorldShare className="text-[22px] mt-4 ml-1" />,
    text: "Hands-on Lessons – Learn digital painting, shading & composition.",
  },
  {
    icon: <FiRotateCw className="font-bold text-xl mt-4 ml-1" />,
    text: "Tool Mastery – Master Procreate, Photoshop, & Illustrator.",
  },
  {
    icon: <RiCoinsLine className="font-bold text-xl mt-4 ml-1" />,
    text: "Exclusive Resource Pack – Brushes, templates & textures.",
  },
  {
    icon: <SiCodementor className="font-bold text-xl mt-4 ml-1" />,
    text: "Live Mentorship – Weekly Q&A sessions with industry pros.",
  },
  {
    icon: <PiMapPinArea className="font-extrabold text-xl mt-4 ml-2" />,
    text: "Project-Based Learning – Build a stunning portfolio.",
  },
  {
    icon: <CiAt className="font-bold text-[21px] mt-4 ml-1" />,
    text: "Certificate of Completion – Boost your creative career.",
  },
  {
    icon: <IoBookOutline className="font-bold text-[22px] mt-1 ml-1" />,
    text: "Community Access – Network with fellow artists.",
  },
];

const categories = [
  "Event Planners & Wedding Services",
  "Gyms & Fitness Trainers",
  "Lawyers & Legal Services",
  "Doctors & Clinics",
  "Hotels & Travel Agencies",
  "Photographers & Videographers",
  "Home-Based Businesses",
  "Bakeries",
  "Real Estate Agents",
  "Artists",
  "Freelancers & Solopreneurs",
  "Local Shops & Retail Stores",
  "Startups & Small Tech Businesses",
  "Accountants",
  "Salons & Beauty Parlors",
  "Vet Clinics",
  "Musicians",
  "Restaurants & Cafés",
  "Coaching Centers & Tutors",
  "Interior Designers & Architects",
  "NGOs & Social Enterprises",
  "Automobile",
  "Bands",
  "Dealerships",
  "Home Services",
];

const field = [
  {
    icon: <HiOutlineCalendar className="font-semibold text-2xl mt-3 ml-3" />,
    text: " Sketching Basics – Shape, form, and proportion fundamentals",
  },
  {
    icon: <SiMoleculer className="font-semibold text-2xl mt-3 ml-3" />,
    text: "Digital Painting – Master shading, blending & coloring techniques",
  },
  {
    icon: <BsWhatsapp className="font-semibold text-2xl mt-3 ml-3" />,
    text: "Character & Concept Art – Create professional grade designs",
  },
  {
    icon: <SiCodementor className="font-semibold text-2xl mt-3 ml-3" />,
    text: "Live Mentorship – Weekly Q&A sessions with industry pros.",
  },
  {
    icon: <LiaLaptopCodeSolid className="font-semibold text-2xl mt-3 ml-3" />,
    text: "Portfolio Building – Craft stunning pieces to showcase your skills",
  },
  {
    icon: <RiFileUserLine className="font-semibold text-[24px] mt-3 ml-3" />,
    text: "Bonus: Monetization Guide – How to sell your art & get freelance gigs",
  },
  {
    icon: <FaComputer className="font-semibold text-2xl mt-3 ml-3" />,
    text: "Certificate of Completion – Boost your creative career",
  },
  {
    icon: <LuDatabaseBackup className="font-semibold text-xl ml-3 mt-1" />,
    text: "Project-Based Learning – Build a stunning portfolio",
  },
  {
    icon: <FaRegUserCircle className="font-semibold text-2xl mt-3 ml-3" />,
    text: "Live Mentorship – Weekly Q&A sessions with industry pros",
  },
];
const DigitalArtCourse = () => {
  return (
    <div className="max-w-[28rem] h-screen text-center space-y-4 absolute left-0 ">
      <div className="flex justify-end mr-6 mt-2">
        <div className="w-[45%] flex justify-center item-center rounded-full bg-gradient-to-r from-blue-600 to-pink-500">
          <button className="font-semibold text-[18px] text-white my-2 ">
            Get Start
          </button>
        </div>
      </div>
      <br />
      <br />
      {/* Header Section */}
      <h2 className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-400 text-transparent bg-clip-text text-3xl font-bold ">
        Master the Art of Digital Illustration
      </h2>
      <p className="text-[#3c3939] font-bold text-lg">
        A 4-Week Course Designed for Beginners & Enthusiasts!
      </p>
      <div className="mx-4">
        <img src="/Screenshot 2025-03-07 235534.png" alt="" />
      </div>
      <p className="text-gray-950 font-bold text-[14px] grid grid-cols-1 mt-6 font-lato">
        <p className="whitespace-nowrap overflow-x-auto bg-white text-[14px]">
          Learn to create stunning digital artwork with step-by-step
        </p>
        <p>guidance from industry experts. </p> No prior experience required.
        Just your creativity!
        <p className="font-bold text-gray-950">Enroll now for ₹7,999</p>
      </p>

      <div className="mt-8">
        <button className="w-[78%] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white  py-3.5 rounded-full text-[18px] font-[700]">
          Secure Your Spot for Just ₹79
        </button>

        {/* Without Proper Training Section - Cards in One Row with Shaded Background and Cross Symbol on Last Card */}
        <div className="relative bg-gradient-to-b from-white via-[#d1eefe]">
          <p className="text-[15px] font-semibold p-3 w-[95%] mx-auto">
            Use a coupon code within 15 minutes to unlock a special bonus pack!
          </p>
          <br />
          <div className="w-full  bg-gradient-to-b via-[#cce1eb] to-transparent h-[270px]  p-2 ">
            <h1 className="text-[21px] font-semibold bg-gradient-to-r from-gray-950 to-gray-600 text-transparent bg-clip-text text-center">
              Without Proper Training, You Might:
            </h1>
            <div className="grid grid-cols-3 mt-9 gap-6 ml-4 mr-6">
              {[
                "Struggle with complex software tools",
                "Feel stuck without structured learning",
                "Miss out on monetizing your skills",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-50 rounded-lg w-30 text-center relative px-1"
                >
                  <p className="text-gray-950 font-semibold text-[14px] mt-14 mb-3">
                    {item}
                  </p>
                  {index === 2 && (
                    <ImCross className="text-red-500 absolute top-8 left-13" />
                  )}{" "}
                  {/* Cross on Last Item */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="text-left w-[98%] ml-2">
        <h2 className="text-[22px] font-semibold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-transparent bg-clip-text text-center">
          With This Course, You Get:
        </h2>
        <ul className="pl-4 grid grid-cols-1 md:grid-cols-1 gap-5 w-[94%] mt-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-[#96b2b2] shadow-[0px_1px_4px_1px_rgba(10,4,200,200)] rounded-lg p-1.5 flex space-x-4"
            >
              <p className="font-[500]">{item.icon}</p>
              <p className="text-gray-950 font-[500] text-[14px] mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </ul>
      </div>

      <br />

      <button className="w-[68%] bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 text-white px-4 py-2 rounded-[12px] font-semibold text-[22px]">
        Book Now at ₹49
      </button>

      {/* Video Section */}
      <div className="mt-6 w-[90%] ml-5">
        <div className="relative flex justify-center shadow-sm shadow-blue-500 rounded-[20px] overflow-hidden h-98 bg-white mt-5">
          <FaPlayCircle className="absolute text-gray-400 text-6xl cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Video Section */}
      <div className="flex mt-6 grid-clos-2 gap-4 w-[90%] ml-5 justify-between">
        <div className="relative flex shadow-sm rounded-[14px] overflow-hidden w-full h-46 bg-white bg-gradient-to-tr from-blue-800 via-purple-400 to-purple-500 p-0.5">
          <div className="w-full h-full bg-white rounded-[13px] p-5 px-1">
            <h1 className="font-[500]">Aditi Verma</h1>
            <h2 className="text-gray-700">22</h2>
            <p className="text-black text-[10px] text-center font-[600]">
              I always wanted to learn digital art, but tutorials were
              confusing. This course made everything so simple! Now, I'm taking
              commissions online!
            </p>
          </div>
        </div>
        <div className="relative flex shadow-sm rounded-[14px] overflow-hidden w-full h-46 bg-white bg-gradient-to-tr from-blue-800 via-purple-400 to-purple-500 p-0.5">
          <div className="w-full h-full bg-white rounded-[13px] p-5 px-1">
            <h1 className="font-[500]">Rajesh Khanna</h1>
            <h2 className="text-gray-700">30</h2>
            <p className="text-black text-[10px] text-center font-[600]">
              Switching from traditional art to digital felt overwhelming, but
              this course changed everything! The structured lessons helped me
              master Procreate in weeks!
            </p>
          </div>
        </div>
      </div>

      <br />
      {/* Is this Right for You Section */}
      <div className="text-center mt-8">
        <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text text-[24px] font-semibold">
          Is this Right for You?
        </h1>
        <h2 className="text-[14px] font-semibold">
          Everybody is fond of Digital Art! You need it too.
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-4 w-[93%] mx-auto">
          <img src="/Screenshot 2025-03-08 133243.png" alt="" />
        </div>
      </div>
      <br />
      <div className="mt-6">
        <div>
          <h1 className="text-[26px] font-semibold bg-gradient-to-r from-gray-950 to-gray-500 text-transparent bg-clip-text">
            Not Satisfied Yet?
          </h1>
          <h2 className="font-[500]">
            We got you! Here are few extra features
          </h2>
        </div>
        <div className="text-left w-[98%] ml-2">
          <ul className="pl-4 grid grid-cols-1 md:grid-cols-1 gap-5 w-[94%] mt-10">
            {field.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-[#96b2b2] shadow-[0px_1px_3px_1px_rgba(10,4,200,200)] rounded-lg flex space-x-4"
              >
                <p className="font-[500]">{item.icon}</p>
                <p className="text-gray-950 font-[500] text-[14px] mt-1 mb-2 mr-2">
                  {item.text}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <button className="w-[55%] bg-gradient-to-r from-blue-800 via-blue-500 to-pink-500 text-white px-4 p-2 rounded-[10px] font-semibold text-[18px] mt-2">
        Book Now at ₹79
      </button>
      <h1 className="text-[25px] font-semibold bg-gradient-to-r from-gray-950 to-gray-500 text-transparent bg-clip-text mt-8">
        Enroll Now for ₹7,999
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 font-[500] w-[90%] mx-auto">
        <div className="w-full text-black py-2 rounded-full text-[15px] border-1 border-blue-100 flex justify-center">
          <h1 className="mr-8">Secure Your Spot for Just ₹79</h1>
        </div>
        <div className="w-full text-black py-2 rounded-full text-[15px] border-1 border-blue-100 relative">
          <h1 className=" ml-16">
            Bonus Offer: Apply a coupon code within 15 minutes to unlock:
          </h1>
        </div>
        <div className="w-full text-black py-2 rounded-full text-[14px] border-1 border-blue-100 flex justify-center">
          <h1 className="mr-11">Exclusive Brush & Texture Pack</h1>
        </div>
        <div className="w-full text-black py-2 rounded-full text-[14px] border-1 border-blue-100 flex justify-center">
          <h1 className="mr-1"> Extra Live Q&A Session with Mentors</h1>
        </div>
      </div>

      <h1 className="text-[15px] font-semibold w-[98%] flex ml-10 mt-8">
        WE Offer everything you need at ₹7,999-but wait...
        <PiEyesFill />
      </h1>

      <div className="w-[90%] mx-auto bg-gradient-to-r from-[#f9e5f6] via-pink-50 to-[#d9f9f9] flex justify-center items-center p-2 rounded-lg">
        <h1 className="text-[12px] font-semibold">
          Use a Special Code & Unlock a Game-Changing Discount to avail same
          course in a discounted price!
        </h1>
      </div>

      <button className="w-[55%] bg-gradient-to-r from-blue-800 via-blue-600 to-pink-500 text-white px-4 p-2 rounded-[10px] font-semibold text-[18px] mt-2">
        Book Now at ₹79
      </button>

      {/* FAQs Section */}
      <div className="text-center space-y-4 mt-8 w-full mx-auto">
        <h2 className="text-[24px] font-[500] text-gray-900 bg-clip-text">
          FAQs
        </h2>
        <div className="space-y-2 text-left w-[90%] mx-auto">
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: Who is this course for?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[14px] font-[500] mt-1">
                This course is perfect for beginners, hobbyists, and aspiring
                digital artists who want to learn digital illustration from
                scratch.No prior experience required!
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: What tools do I need to take this course?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <ul className="text-left text-[14px] font-[500] mt-1">
                You'll need:
                <li className="flex text-[14px]"><TiTick className="text-[20px] text-[#515050]"/>A tablet (iPad, Wacom, or any drawing tablet),</li>
                <li className="flex text-[14px]"><TiTick className="text-[20px] text-[#515050]"/>Digital art software (Procreate, Photoshop, or Krita),</li>
                <li className="flex text-[14px]"><TiTick className="text-[20px] text-[#515050]"/>A passion for creativity.</li>
              </ul>
            </div>
          </p >
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: How long is the course?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                The course runs for 4 weeks, covering everything from sketching
                to advanced digital painting techniques.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: Is this a live or recorded course?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                The course includes both pre-recorded lessons and live Q&A
                sessions with industry experts.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: Will I receive a certificate?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                Yes! After completing the course, you'll receive a Certificate
                of Completion to boost your portfolio and career opportunities.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: Can I monetize my digital art after this course?
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                {" "}
                Absolutely! The course includes a bonus session on freelancing &
                selling your art so you can start earning right away.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: What happens if I miss a live session?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                No worries! All live sessions will be recorded and uploaded for
                later viewing.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-6"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: How do I apply the coupon code?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                Once you sign up, you'll get 15 minutes to enter a valid coupon
                code to unlock exclusive bonuses.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-8"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: What if I don't have a tablet?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                You can still take the course using a mouse & free digital art
                software (like Krita), though a tablet is recommended.
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-8"/>
          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: Is there a refund policy?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2 mt-5">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                {" "}
                The ₹79 booking fee is non-refundable, but we're confident
                you'll love the course!
              </p>
            </div>
          </p>
          <div className="w-[95%] border-1 text-gray-300 mt-8"/>

          <p className="w-[90%] mx-auto">
            <strong className="flex justify-between font-[600] text-[15px]">
              Q: How do I enroll?{" "}
              <FaChevronDown className="mx-4 text-gray-400 cursor-pointer" />
            </strong>
            <div className="flex grid-cols-2 mt-5">
              <li className="text-black text-[20px] font-bold mt-0 p-0" />
              <p className="text-left text-[13px] font-[500] mt-1">
                Click the "Enroll Now" button, make the payment, and get instant
                access to the course materials!
              </p>
            </div>
          </p>
        </div>
      </div>

      <button className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold text-[14px] w-[50%] mt-10">
        Let's Get Started
      </button>

      <h1 className="font-bold text-black text-[22px] mx-auto w-[85%] mt-10">
        Ready to Start Your Digital Art Journey?
      </h1>

      <h2 className="font-semibold text-black text-[16px]">
        Click below to secure your spot & start creating!
      </h2>

      {/* CTA Section */}
      <button className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-500 text-white px-6 py-2 rounded-lg w-[50%] font-bold text-[15px] mb-8">
        Enroll Now
      </button>
    </div>
  );
};

export default DigitalArtCourse;
