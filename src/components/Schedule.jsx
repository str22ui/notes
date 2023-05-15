import React from "react";
import Dash from "./Dash";
import { Link } from "react-router-dom";
import { TbCalendarTime } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

const Schedule =
  () => {
    return (
      <div className="overflow-x-hidden">
        <Dash />
        <div className="container mx-auto p-4">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block border-none w-96 p-4 pl-10 text-sm text-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Searh your notes"
                required
              />
            </div>
          </form>
          <div className="grid grid-cols-2 w-full ">
            <div className="my-5 mx-1">
              <div class="flex w-full rounded-lg bg-white my-2 p-6 dark:bg-[#5296DE] ">
                <TbCalendarTime
                  size={
                    70
                  }
                  color="white"
                />
                <div></div>
                <div className="grid grid-cols-1 mt-2 mx-3">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Ngecul
                  </h5>

                  <div className="flex gap-2">
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      19
                      April
                    </p>
                    <p className="text-white">
                      |
                    </p>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      All
                      Day
                    </p>
                  </div>
                  <div className="flex justify-between">
                    {/* <MdKeyboardArrowRight
                      className="bg-red-200"
                      size={
                        25
                      }
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 mx-1">
              <div class="flex w-full rounded-lg bg-white my-2 p-6 dark:bg-[#5296DE] ">
                <TbCalendarTime
                  size={
                    70
                  }
                  color="white"
                />
                <div></div>
                <div className="grid grid-cols-1 mt-2 mx-3">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Ngecul
                  </h5>

                  <div className="flex gap-2">
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      19
                      April
                    </p>
                    <p className="text-white">
                      |
                    </p>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      All
                      Day
                    </p>
                  </div>
                  <div className="flex justify-between">
                    {/* <MdKeyboardArrowRight
                      className="bg-red-200"
                      size={
                        25
                      }
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/fschedule">
          <button
            type="submit"
            class="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
            New
            Schedule
          </button>
        </Link>
      </div>
    );
  };

export default Schedule;
