import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaGithub,
  FaDribbble,
  FaCodepen,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="w-20">
        <a
          href="#"
          className="group relative inline-block h-7 rounded text-white text-center transition-all duration-500"
        >
          <span className="absolute w-20 inset-x-0 bottom-0 px-2 py-1 text-gray-600 text-sm rounded bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-8 -left-7 transition-all duration-500 ease-out">
            Facebook
          </span>
          <FaFacebook className="text-2xl leading-tight" />
        </a>
      </div>

      <div className="w-20">
        <a
          href="#"
          className="group relative inline-block w-10 h-7  rounded text-white text-center transition-all duration-500"
        >
          <span className="absolute w-20 inset-x-0 bottom-0 px-2 py-1 text-gray-600 text-sm rounded bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-8 -left-7 transition-all duration-500 ease-out">
            Twitter
          </span>
          <FaTwitter className="text-2xl leading-tight" />
        </a>
      </div>
      <div className="w-20">
        <a
          href="#"
          className="group relative inline-block w-10 h-7  rounded text-white text-center transition-all duration-500"
        >
          <span className="absolute w-20 inset-x-0 bottom-0 px-2 py-1 text-gray-600 text-sm rounded bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-8 -left-7 transition-all duration-500 ease-out">
            Google+
          </span>
          <FaGooglePlusG className="text-2xl leading-tight" />
        </a>
      </div>
      <div className="w-20">
        <a
          href="#"
          className="group relative inline-block w-10 h-7  rounded text-white text-center transition-all duration-500"
        >
          <span className="absolute w-20 inset-x-0 bottom-0 px-2 py-1 text-gray-600 text-sm rounded bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-8 -left-7 transition-all duration-500 ease-out">
            Github
          </span>
          <FaGithub className="text-2xl leading-tight" />
        </a>
      </div>
      <div className="w-20">
        <a
          href="#"
          className="group relative inline-block w-10 h-7  rounded text-white text-center transition-all duration-500"
        >
          <span className="absolute w-20 inset-x-0 bottom-0 px-2 py-1 text-gray-600 text-sm rounded bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-8 -left-7 transition-all duration-500 ease-out">
            Dribbble
          </span>
          <FaDribbble className="text-2xl leading-tight" />
        </a>
      </div>
      <div className="w-20">
        <a
          href="#"
          className="group relative inline-block w-10 h-7  rounded text-white text-center transition-all duration-500"
        >
          <span className="absolute w-20 inset-x-0 bottom-0 px-2 py-1 text-gray-600 text-sm rounded bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-8 -left-7 transition-all duration-500 ease-out">
            CodePen
          </span>
          <FaCodepen className="text-2xl leading-tight" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
