import { FaInstagram, FaYoutube, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/logofooter.png"; 

const Contact = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#DCC2E4' }} className="text-footerColor py-8 px-4">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center mt-8">

       
        <div className="flex flex-col space-y-6 md:w-1/2 items-center md:items-start">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-24" />
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4 md:space-y-6 items-start ">
            {/* Phone */}
            <div className="flex items-center space-x-4 justify-center ">
              <FaPhoneAlt className="text-2xl" />
              <a href="tel:+123456789" className="text-xl">+1 234 567 890</a>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 justify-center ">
              <FaMapMarkerAlt className="text-2xl" />
              <a href="tel:+123456789" className="text-xl">New Orleans</a>
            </div>

            {/* Mail */}
            <div className="flex items-center space-x-4 justify-center ">
              <FaEnvelope className="text-2xl" />
              <a href="mailto:example@example.com" className="text-xl">info@bercelleflowers.com</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center">
            <FaInstagram className="text-4xl  hover:text-pink-600 cursor-pointer" />
            <FaYoutube className="text-4xl hover:text-red-700 cursor-pointer" />
            <FaLinkedin className="text-4xl hover:text-blue-800 cursor-pointer" />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col space-y-6 md:w-1/3 mt-6 md:mt-0">
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg">Name:</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 mt-2 border bg-secondary placeholder:text-white text-white rounded-md"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border bg-secondary placeholder:text-white text-white rounded-md"
                placeholder="Your Email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg">Message:</label>
              <textarea
                id="message"
                className="w-full p-3 mt-2 border bg-secondary placeholder:text-white text-white rounded-md"
                rows="4"
                placeholder="Your Message"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center ">
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
