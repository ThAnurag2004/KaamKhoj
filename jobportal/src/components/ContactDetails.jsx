import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="bg-black text-white rounded-xl text-justify md:text-base md:p-8 w-full sm:max-w-md md:max-w-lg xl:max-w-xl shadow-lg">
      <h1 className='text-2xl md:text-3xl font-bold mb-5'>Contact Us</h1>
      {/* Location */}
      <div className="flex items-center space-x-4 md:space-x-5 mb-6">
        <FaMapMarkerAlt className="text-white text-2xl md:text-3xl flex-shrink-0" />
        <div className="flex-1">
          <p className="text-lg md:text-xl font-normal leading-snug">123, Main Street, Delhi, India</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center space-x-4 md:space-x-5 mb-6">
        <FaPhoneAlt className="text-white text-2xl md:text-3xl flex-shrink-0" />
        <div className="flex-1">
          <p className="text-lg md:text-xl font-normal leading-snug">+91 98765 43210</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4 md:space-x-5">
        <FaEnvelope className="text-white text-2xl md:text-3xl flex-shrink-0" />
        <div className="flex-1">
          <p className="text-lg md:text-xl font-normal leading-snug break-words">support@kaaryakhoj.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
