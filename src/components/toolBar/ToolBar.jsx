import { IoIosVideocam } from "react-icons/io";
import { IoVolumeMute } from "react-icons/io5";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { FaClosedCaptioning } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

import Tool from "../home/Tool";

let demo = () => {
  console.log("object");
};

const data = [
  {
    hero: false,
    icon: <IoSettings />,
    text: "settings",
    action: demo,
    className: " ",
  },
  {
    hero: false,
    icon: <BsFillRecord2Fill />,
    text: "record",
    action: demo,
    className: " text-red-600",
  },
  {
    hero: false,
    icon: <FaPauseCircle />,
    text: "pause",
    action: demo,
    className: "",
  },
  {
    hero: false,
    icon: <IoIosVideocam />,
    text: "Video",
    action: demo,
    className: "",
  },
  {
    hero: false,
    icon: <IoVolumeMute />,
    text: "Speaker",
    action: demo,
    className: "",
  },
  {
    hero: false,
    icon: <AiOutlineAudioMuted />,
    text: "Mute",
    action: demo,
    className: "",
  },
  {
    hero: false,
    icon: <FaClosedCaptioning />,
    text: "caption",
    action: demo,
    className: "",
  },
];

function ToolBar() {
  return (
    <div className="w-full z-[100] absolute bottom-0 pb-9 left-0 px-5 flex justify-center items-center ">
      <div className="h-[1.9cm] w-10/12 bg-[#b2b0be53] backdrop-blur-3xl rounded-2xl flex px-10 justify-center items-center shadow-2xl gap-x-4">
        {data.map((item) => (
          <Tool
            className={item.className}
            action={item.action}
            text={item.text}
            hero={item.hero}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ToolBar;
