import Tool, { ToolBig } from "../home/Tool";

function ToolBar({ text, tools }) {
  return (
    <div className="w-full z-[100] absolute bottom-0 pb-9 left-0 px-5 flex justify-center items-center flex-col gap-3">
      <div className=" h-[1.5cm] w-full flex justify-center items-center">
        <div className="  w-7/12 h-full justify-center items-center flex">
          <span className=" text-primary-600 px-3 py-1 font-extrabold bg-[#b2b0be53] backdrop-blur-3xl rounded-2xl text">
            {text}
          </span>
        </div>
      </div>
      <div className="h-[1.9cm] w-10/12 bg-[#b2b0be53] backdrop-blur-3xl rounded-2xl flex px-10 justify-center items-center shadow-2xl gap-x-4">
        {tools.map((item) => {
          if (item.focus) {
            return (
              <ToolBig
                className={item.className}
                action={item.action}
                text={item.text}
                hero={item.hero}
                icon={item.icon}
                icon2={item.icon2}
                text2={item.text2}
                value={item.value}
              />
            );
          }
          return (
            <Tool
              className={item.className}
              action={item.action}
              text={item.text}
              hero={item.hero}
              icon={item.icon}
              icon2={item.icon2}
              text2={item.text2}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToolBar;
