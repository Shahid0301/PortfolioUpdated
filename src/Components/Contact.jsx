//Contact Section
import SocialIcon from "./SocialIcon";

function Contact() {
  return (
    <div id="contact" className="w-full h-screen flex justify-center items-center flex-col bg-black-background">
      <SocialIcon />
      <h1 className="text-[5vw] font-bold text-white my-10">Contact Us</h1>
      <h3 className="text-subheading text-[2vw] phone:text-[5vw]">professionalshahid0@gmail.com</h3>
      <span className="text-subheading m-10 text-[1vw] phone:text-[3vw]">Copyright 2024 &copy; All rights reserved | Shahid khan</span>
    </div>
  ) ;
}

export default Contact;
