import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Modal from "./Modal";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import {
  GrUndo,
  GrRedo,
} from "react-icons/gr";
const FSchedule =
  () => {
    const [
      openModal,
      setOpenModal,
    ] =
      useState(
        false
      );

    return (
      <div className="flex flex-col h-screen justify-between">
        <nav class="bg-white border-gray-200 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
            <Link to="/schedule">
              <a class="flex items-center">
                <MdKeyboardArrowLeft
                  size={
                    35
                  }
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  Schedule
                </span>
              </a>
            </Link>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">
                Open
                main
                menu
              </span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              class="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  d">
                <li className="mt-1">
                  <GrUndo
                    size={
                      25
                    }
                  />
                </li>
                <GrRedo
                  className="mt-1"
                  size={
                    25
                  }
                />
                {/* <li>
                  <BsTrash />
                </li> */}
                <li>
                  <button
                    type="button"
                    class="text-black border border-1 border-black hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Done
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main class="mb-auto h-10  p-4">
          <div className="container px-5">
            <div className="text-3xl">
              <h2>
                Ngecul
              </h2>
            </div>
            <div className="border-b my-5">
              <button
                type="submit"
                class="text-white flex gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  setOpenModal(
                    true
                  );
                }}
              >
                <BsAlarm
                  size={
                    18
                  }
                />
                Add
                Schedule
              </button>
              {openModal && (
                <Modal
                  closeModal={
                    setOpenModal
                  }
                />
              )}
              {/* <input
                type="text"
                className="w-full"
              /> */}
              <div className="text-right pt-5">
                <label className="text-right">
                  Last
                  time
                  edit
                  1
                  April
                  |
                  12:53
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

export default FSchedule;
