import React from "react";
import "./contact.css";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <>
      <div className="bg-dark min-h-screen flex flex-col">
        <Navbar />
        <h1 className="text-center text-5xl font-BebasNeue space-x-1 font-bold text-primary gradient-text mt-16">
          Contact me on
        </h1>

        <div className="flex justify-center items-center my-auto">
  <a
    href="https://www.linkedin.com/in/muhammad-abdullah-5242b1214/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button class="button button-blue">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="w-6 h-6 text-gray-800 dark:text-white"
      >
        <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.025-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.938v5.667H9.356V9.05h3.415v1.551h.05c.476-.9 1.637-1.849 3.368-1.849 3.601 0 4.266 2.367 4.266 5.448v6.252zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.066 0-1.141.923-2.066 2.067-2.066 1.142 0 2.066.925 2.066 2.066 0 1.14-.924 2.066-2.066 2.066zm1.778 13.019H3.558V9.05h3.558v11.402zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.225.792 24 1.771 24h20.451C23.205 24 24 23.225 24 22.272V1.727C24 .774 23.205 0 22.225 0z"></path>
      </svg>
    </button>
  </a>

  <a
    href="https://github.com/Blackburn-12"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button class="button button-black">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="w-6 h-6 text-gray-800 dark:text-white"
      >
        <path
          clip-rule="evenodd"
          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </button>
  </a>
</div>

      </div>
    </>
  );
};

export default Contact;
