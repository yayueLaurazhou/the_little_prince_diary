import {useState} from "react";

export default function SideBar(){
    const menus = [
        { name: "New Note", link: "/", icon: "MdOutlineDashboard"},
        { name: "Export all the notes", link: "/", icon: ""},
      ];
      const [open, setOpen] = useState(true);
      return (
          <div
            className={`bg-[#0e0e0e] min-h-screen ${
              open ? "w-72" : "w-16"
            } duration-500 text-gray-100 px-4`}
          >
            <div className="py-3 flex justify-end">
              <button className="cursor-pointer" onClick={() => setOpen(!open)}>{open ? "close" : "open"}
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {menus?.map((menu, i) => (
                <div
                  to={menu?.link}
                  key={i}
                  className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
      );
}