import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };

  return (
    <div className="bg-yellow-500 relative min-h-screen md:flex flex-col items-center pt-8 max-w-10 md:max-w-60 w-full border-r border-bordercolor text-sm">
      <div className="group reltaive ">
        <label htmlFor="image">
          <img
            className=""
            src={image ? URL.createObjectURL(image) : user?.image}
            alt=""
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          <div className="absolute hidden top-0 right-0 left-0 botom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>
      {image && (
        <button className="absolute top-1 right-1 flex p-3 gap-2 bg-primary/10 text-primary cursor-pointer">
          save{" "}
          <img
            src={assets.check_icon}
            width={13}
            onClick={updateImage}
            alt="check icon"
          />
        </button>
      )}

      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

      <div className="w-full">
        {/* the sub block that contains each block that is dashboard  */}

        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={` relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? "bg-primary/10 text-primary"
                : "text-gray-600"
            }`}
          >
            {/* sub blocks  */}

            <img
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
              alt="car icon"
            />
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`${
                link.path === location.pathname && "bg-primary"
              } w-1.5 h-8 rounded-lg right-0 absolute`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
