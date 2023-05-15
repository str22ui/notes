import React, {
  useState,
} from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  BsImage,
  BsTypeItalic,
  BsListCheck,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsPencilFill,
  BsTrash,
} from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoMdAlarm } from "react-icons/io";

import { BiBold } from "react-icons/bi";
import {
  RiListUnordered,
  RiListOrdered,
} from "react-icons/ri";
import {
  GrUndo,
  GrRedo,
} from "react-icons/gr";

const FJournal =
  () => {
    const [
      body,
      setBody,
    ] =
      useState(
        ""
      );

    const handleBody =
      (
        e
      ) => {
        console.log(
          e
        );
        setBody(
          e
        );
      };
    return (
      <div className="flex flex-col h-screen justify-between">
        <nav class="bg-white border-gray-200 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
            <Link to="/journal">
              <a class="flex items-center">
                <MdKeyboardArrowLeft
                  size={
                    35
                  }
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  Journal
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
                {/* <li className="mt-1">
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
                  /> */}
                <li>
                  <BsTrash
                    className="mt-2"
                    size={
                      25
                    }
                  />
                </li>
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
          {/* <ReactQuill
              theme="snow"
              value={
                value
              }
              onChange={
                setValue
              }
            />
  
            ; */}
          <div className="container px-5">
            <div className="text-3xl hover:border-none hover:outline-none">
              <input
                type="text"
                className="outline-none border-none w-1/2 text-3xl hover:border-none hover:outline-none"
                placeholder="Title"
              />
              {/* <h2>
                  Catatan
                  Kuliah
                  M7
                </h2> */}
            </div>
            <div className="border-b my-5">
              <div className="App">
                <ReactQuill
                  placeholder="write something amazing..."
                  modules={
                    FJournal.modules
                  }
                  formats={
                    FJournal.formats
                  }
                  onChange={
                    handleBody
                  }
                  value={
                    body
                  }
                />
              </div>

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
        <footer class="h-12 bg-blue-500  py-2 flex justify-center ">
          <ul class="font-medium text-lg text-white flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  d">
            <li>
              <BsImage
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <AiOutlineCheckCircle
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <IoMdAlarm
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              Title
            </li>
            <li>
              Heading
            </li>
            <li>
              SubHeading
            </li>
            <li>
              Body
            </li>
            <li>
              <RiListUnordered
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <RiListOrdered
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <BsListCheck
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <BiBold
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <BsTypeItalic
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <BsTypeUnderline
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <BsTypeStrikethrough
                size={
                  30
                }
                color="white"
              />
            </li>
            <li>
              <BsPencilFill
                size={
                  23
                }
                color="white"
              />
            </li>
          </ul>
        </footer>
      </div>
    );
  };
var icons =
  ReactQuill.Quill.import(
    "ui/icons"
  );
FJournal.modules =
  {
    history:
      {
        delay: 1000,
        maxStack: 100,
        userOnly: false,
      },
    toolbar:
      [
        [
          "bold",
          "italic",
          "underline",
          "strike",
        ],
        [
          "undo",
          "redo",
        ],
        [
          {
            align:
              [],
          },
        ],

        [
          {
            list: "ordered",
          },
          {
            list: "bullet",
          },
        ],
        [
          {
            indent:
              "-1",
          },
          {
            indent:
              "+1",
          },
        ],

        [
          {
            size: [
              "small",
              false,
              "large",
              "huge",
            ],
          },
        ],
        [
          {
            header:
              [
                1,
                2,
                3,
                4,
                5,
                6,
                false,
              ],
          },
        ],
        [
          "link",
          "image",
          "video",
        ],
        [
          {
            color:
              [],
          },
          {
            background:
              [],
          },
        ],

        [
          "clean",
        ],
      ],
    clipboard:
      {
        matchVisual: false,
      },
  };

icons[
  "undo"
] = `<svg viewbox="0 0 18 18">
      <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
      <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
    </svg>`;
icons[
  "redo"
] = `<svg viewbox="0 0 18 18">
      <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
      <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
    </svg>`;

FJournal.formats =
  [
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "indent",
    "size",
    "header",
    "link",
    "image",
    "video",
    "color",
    "background",
    "clean",
  ];
export default FJournal;
