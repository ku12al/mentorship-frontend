import React from "react";
import { FaPaintBrush, FaPlayCircle } from "react-icons/fa";
import { FiRotateCw } from "react-icons/fi";
import { CiAt } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { RiCoinsLine } from "react-icons/ri";
import { SiCodementor } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { PiMapPinArea } from "react-icons/pi";
import { TbWorldShare } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { SiMoleculer } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineCalendar } from "react-icons/hi2";
import { RiFileUserLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";

const benefits = [
  {
    icon: <TbWorldShare className="font-bold text-3xl" />,
    text: "Hands-on Lessons – Learn digital painting, shading & composition.",
  },
  {
    icon: <FiRotateCw className="font-extrabold text-3xl" />,
    text: "Tool Mastery – Master Procreate, Photoshop, & Illustrator.",
  },
  {
    icon: <RiCoinsLine className="font-bold text-3xl" />,
    text: "Exclusive Resource Pack – Brushes, templates & textures.",
  },
  {
    icon: <SiCodementor className="font-bold text-3xl" />,
    text: "Live Mentorship – Weekly Q&A sessions with industry pros.",
  },
  {
    icon: <PiMapPinArea className="font-bold text-3xl" />,
    text: "Project-Based Learning – Build a stunning portfolio.",
  },
  {
    icon: <CiAt className="font-bold text-[32px]" />,
    text: "Certificate of Completion – Boost your creative career.",
  },
  {
    icon: <IoBookOutline className="font-bold text-3xl" />,
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
    icon: <HiOutlineCalendar className="font-bold text-3xl" />,
    text: " Sketching Basics – Shape, form, and proportion fundamentals",
  },
  {
    icon: <SiMoleculer className="font-extrabold text-3xl" />,
    text: "Digital Painting – Master shading, blending & coloring techniques",
  },
  {
    icon: <BsWhatsapp className="font-bold text-3xl" />,
    text: "Character & Concept Art – Create professional grade designs",
  },
  {
    icon: <SiCodementor className="font-bold text-3xl" />,
    text: "Live Mentorship – Weekly Q&A sessions with industry pros.",
  },
  {
    icon: <LiaLaptopCodeSolid className="font-bold text-3xl" />,
    text: "Portfolio Building – Craft stunning pieces to showcase your skills",
  },
  {
    icon: <RiFileUserLine className="font-bold text-[32px]" />,
    text: "Bonus: Monetization Guide – How to sell your art & get freelance gigs",
  },
  {
    icon: <FaComputer className="font-bold text-3xl" />,
    text: "Certificate of Completion – Boost your creative career",
  },
  {
    icon: <LuDatabaseBackup className="font-bold text-3xl" />,
    text: "Project-Based Learning – Build a stunning portfolio",
  },
  {
    icon: <FaRegUserCircle className="font-bold text-3xl" />,
    text: "Live Mentorship – Weekly Q&A sessions with industry pros",
  },
];
const DigitalArtCourse = () => {
  return (
    <div className="max-w-[32rem] mx-auto p-4 text-center space-y-6">
      <div className="flex justify-end">
        <div className="w-[35%] flex justify-center item-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <button className="font-bold text-xl text-white mb-1">
            Get Start
          </button>
        </div>
      </div>
      {/* Header Section */}
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl font-bold ">
        Master the Art of Digital Illustration
      </h1>
      <p className="text-gray-700 font-bold text-lg">
        A 4-Week Course Designed for Beginners & Enthusiasts!
      </p>
      <div>
        <img src="/Screenshot 2025-03-07 235534.png" alt="" />
      </div>
      <p className="text-gray-950 font-bold text-[15px]">
        Learn to create stunning digital artwork with step-by-step
        <p>guidance from industry experts. </p> No prior experience required.
        Just your creativity!
        <p className="font-bold text-gray-950">Enroll now for ₹7,999</p>
      </p>

      <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full">
        Secure Your Spot for Just ₹79
      </button>

      <p className="text-[16px] font-semibold">
        Use a coupon code within 15 minutes to unlock a special bonus pack!
      </p>
      <br />

      {/* Without Proper Training Section - Cards in One Row with Shaded Background and Cross Symbol on Last Card */}
      <div className="relative bg-gradient-to-b via-blue-100 to-transparent h-[300px] shadow-blue-300 rounded-lg p-6">
        <h1 className="text-[25px] font-semibold bg-gradient-to-r from-gray-950 to-gray-600 text-transparent bg-clip-text text-center">
          Without Proper Training, You Might:
        </h1>

        <div className="flex justify-center gap-3 mt-4 mx-4">
          {[
            "Struggle with complex software tools",
            "Feel stuck without structured learning",
            "Miss out on monetizing your skills",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 shadow-lg shadow-blue-200 rounded-lg p-6 w-60 text-center relative"
            >
              <p className="text-gray-950 font-500">{item}</p>
              {index === 2 && (
                <ImCross className="text-red-500 text-2xl absolute top-2 left-12 " />
              )}{" "}
              {/* Cross on Last Item */}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />

      {/* Benefits Section */}
      <div className="text-left space-y-2">
        <h2 className="text-[32px] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
          With This Course, You Get:
        </h2>
        <ul className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-lg p-6 flex items-center space-x-4"
            >
              {item.icon}
              <p className="text-gray-950 font-semibold text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </ul>
      </div>

      <br />

      <button className="w-[70%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-[8px] font-bold text-[22px]">
        Book Now at ₹49
      </button>

      {/* Video Section */}
      <div className="mt-6 ">
        <div className="relative flex justify-center shadow-sm shadow-blue-500 rounded-[20px] overflow-hidden h-100 bg-white mt-5">
          <FaPlayCircle className="absolute text-gray-400 text-6xl cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Video Section */}
      <div className="flex mt-6 grid-clos-2 gap-4">
        <div className="relative flex flex-col justify-center shadow-sm rounded-[20px] overflow-hidden md:w-1/2 bg-white bg-gradient-to-tr from-purple-500 via-blue-500 to-purple-700 p-0.5">
          <div className="w-full h-full bg-white rounded-[18px] p-5">
            <h1 className="font-semibold">Aditi Verma</h1>
            <h2 className="text-gray-600">22</h2>
            <p className="text-gray-900 text-[13px] text-center">
              I always wanted to learn digital art, but tutorials were
              confusing. This course made everything so simple! Now, I'm taking
              commissions online!
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center shadow-sm rounded-[20px] overflow-hidden md:w-1/2 bg-white bg-gradient-to-tr from-purple-500 via-blue-500 to-purple-700 p-0.5">
          <div className="w-full h-full bg-white items-center justify-center rounded-[18px] p-5 text-center">
            <h1 className="font-semibold">Rajesh Khanna</h1>
            <h2 className="text-gray-600">30</h2>
            <p className="text-gray-900 text-[13px] text-center">
              Switching from traditional art to digital felt overwhelming, but
              this course changed everything! The structured lessons helped me
              master Procreate in weeks!
            </p>
          </div>
        </div>
      </div>

      {/* Is this Right for You Section */}
      <div className="text-center mt-8">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl font-bold">
          Is this Right for You?
        </h1>
        <h2 className="text-[17px] font-semibold">
          Everybody is fond of Digital Art! You need it too.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/Screenshot 2025-03-08 133243.png" alt="" />
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-[40px] font-semibold bg-gradient-to-r from-gray-950 to-gray-600 text-transparent bg-clip-text">
            Not Satisfied Yet?
          </h1>
          <h2>We got you! Here are few extra features</h2>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100">
          {field.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md shadow-gray-300 rounded-lg p-4 flex items-left space-x-4"
            >
              {item.icon}
              <p className="text-gray-950 font-semibold text-[15px] text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <button className="w-[70%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-[8px] font-bold text-[22px]">
        Book Now at ₹79
      </button>

      <br />
      <br />

      <h1 className="text-[40px] font-semibold bg-gradient-to-r from-gray-950 to-gray-600 text-transparent bg-clip-text">Enroll Now for ₹7,999</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
        <button className="w-full text-black px-6 py-2 rounded-full text-[18px] border-2 border-blue-200">
          Secure Your Spot for Just ₹79
        </button>
        <button className="w-full text-black px-6 py-2 rounded-full text-[18px] border-2 border-blue-200">
          Bonus Offer: Apply a coupon code within 15 minutes to unlock:
        </button>
        <button className="w-full text-black px-6 py-2 rounded-full text-[18px] border-2 border-blue-200">
          Exclusive Brush & Texture Pack
        </button>
        <button className="w-full text-black px-6 py-2 rounded-full text-[18px] border-2 border-blue-200">
          Extra Live Q&A Session with Mentors
        </button>
      </div>

      <h1 className="text-[18px] font-semibold">WE Offer everything you need at ₹7,999-but wait...</h1>

      

      <div className="w-full bg-gradient-to-r from-red-100 via-slate-200 to-blue-100 flex justify-center items-center p-4 rounded-lg">
        <h1 className="text-[13px] font-semibold">
          Use a Special Code & Unlock a Game-Changing Discount to avail same
          course in a discounted price!
        </h1>
      </div>

      <button className="w-[70%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-[8px] font-bold text-[22px]">
        Book Now at ₹79
      </button>

      {/* FAQs Section */}
      <div className="text-center space-y-4 mt-8">
        <h2 className="text-[32px] font-bold text-gray-800 bg-clip-text">FAQs</h2>
        <div className="space-y-2 text-left">
          <p >
            <strong className="flex justify-between">Q: Who is this course for? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li className="text-left">This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch.No prior experience required!</li>
          </p>
          <br />
          <p>
            <strong className="flex justify-between">Q: What tools do I need to take this course? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>You'll need: A tablet (iPad, Wacom, or any drawing tablet), Digital
            art software (Procreate, Photoshop, or Krita), and a passion for
            creativity.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: How long is the course? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li className="flex justify-between">The course runs for 4 weeks, covering everything from sketching to
            advanced digital painting techniques.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: Is this a live or recorded course? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>The course includes both pre-recorded lessons and live Q&A sessions
            with industry experts.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: Will I receive a certificate? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>Yes! After completing the course, you'll receive a Certificate of
            Completion to boost your portfolio and career opportunities.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: Can I monetize my digital art after this course? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
           <li> Absolutely! The course includes a bonus session on freelancing &
           selling your art so you can start earning right away.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: What happens if I miss a live session? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>No worries! All live sessions will be recorded and uploaded for
            later viewing.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: How do I apply the coupon code? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>Once you sign up, you'll get 15 minutes to enter a valid coupon code
            to unlock exclusive bonuses.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: What if I don't have a tablet? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>You can still take the course using a mouse & free digital art
            software (like Krita), though a tablet is recommended.</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: Is there a refund policy? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>  The ₹79 booking fee is non-refundable, but we're confident you'll
            love the course!</li>
          </p>
          <br />

          <p>
            <strong className="flex justify-between">Q: How do I enroll? <FaChevronDown className="mx-4 text-gray-400 cursor-pointer"/></strong>
            <li>Click the "Enroll Now" button, make the payment, and get instant
            access to the course materials!</li>
          </p>
        </div>
      </div>

      <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-bold text-[15px] w-[60%]">
        Let's Get Started
      </button>

      <h1 className="font-bold text-black text-3xl">
        Ready to Start Your Digital Art Journey?
      </h1>

      <h2 className="font-semibold text-black text-[18px]">
        Click below to secure your spot & start creating!
      </h2>

      {/* CTA Section */}
      <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg w-[60%] font-bold text-[15px]">
        Enroll Now
      </button>
    </div>
  );
};

export default DigitalArtCourse;
