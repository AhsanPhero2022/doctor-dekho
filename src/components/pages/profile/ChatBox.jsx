import React, { useState } from "react";
import icon from "../../../assets/call.png";
import icons from "../../../assets/video-calling.png";
const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed bottom-0 right-0 p-4">
        <button
          className="bg-blue-500 text-white p-3 rounded-full shadow-md"
          onClick={toggleChat}
        >
          <i className="fas fa-comment">Live Chat</i>
        </button>

        {isOpen && (
          <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg">
            {/* Chat box content */}
            <div className="flex justify-between items-center">
              <div className="mb-2">Chat Box</div>
              <div>
                <button className="btn btn-circle mb-2">Clos</button>
              </div>
            </div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type your message..."
            ></textarea>
            <div className="mt-2 flex items-center justify-evenly">
              <button className="bg-blue-500 text-white p-2 rounded-md mr-2">
                Send
              </button>
              <button className="  p-2 rounded-md mr-2">
                <img className="w-8" src={icon} alt="" />
              </button>
              <button className="  p-2 rounded-md">
                <div>
                  <img className="w-8" src={icons} alt="" />
                </div>
              </button>
            </div>
            <button
              className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-red-500"
              onClick={toggleChat}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
