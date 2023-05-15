import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const Modal =
  ({
    closeModal,
  }) => {
    return (
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
          >
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg font-medium text-gray-900  text-center">
                Edit
                Schedule
              </h3>
              <div class=" ">
                <div class="mt-3 grid grid-cols-1 gap-5 text-center ">
                  <div className="text-left grid grid-cols-1">
                    <label htmlFor="">
                      Time
                    </label>

                    <input
                      type="time"
                      name=""
                      id=""
                      placeholder="Time"
                      className="border border-b-gray-500 rounded-md hover:border-b-blue-500"
                      // onClick={hover:border-b-blue-500}
                    />
                  </div>
                  <div className="text-left grid grid-cols-1">
                    <label htmlFor="">
                      Date
                    </label>

                    <input
                      type="date"
                      name=""
                      id=""
                      className="border border-b-gray-500 rounded-md hover:border-b-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() =>
                  closeModal(
                    false
                  )
                }
              >
                Cancel
              </button>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      // <div class
    );
  };

export default Modal;
