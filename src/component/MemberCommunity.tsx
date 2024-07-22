import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';

const MemberCommunity: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#263238] text-white p-6">
      <header className="flex justify-between items-center">
        <button className="text-white">Back</button>
        <h1 className="text-xl font-bold">Member Community</h1>
      </header>
      <div className="mt-6 flex items-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
        <div className="ml-4">
          <h2 className="text-lg">Nickname</h2>
          <p className="text-sm">Earn higher rewards as you engage</p>
        </div>
      </div>
      <p className="mt-6">Multiply your earnings by participating more in the community!</p>
      <div className="mt-6 space-y-4">
        {[
          { icon: <FaTelegramPlane />, label: 'Follow us on Telegram Channel' },
          { icon: <FaWhatsapp />, label: 'Follow us on Telegram Channel' },
          { icon: <FaLinkedin />, label: 'Follow us on Telegram Channel' },
          { icon: <FaDiscord />, label: 'Follow us on Telegram Channel' },
          { icon: <FaYoutube />, label: 'Follow us on Telegram Channel' },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="text-2xl">{item.icon}</div>
              <p className="ml-4">{item.label}</p>
            </div>
            <div className="text-2xl">&rarr;</div>
          </div>
        ))}
      </div>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 flex justify-around">
        {['Profile', 'Jobs', 'Connect', 'Boost'].map((item, index) => (
          <button key={index} className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <span className="text-sm mt-1">{item}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MemberCommunity;
