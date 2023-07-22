import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  BsTrash,
} from "react-icons/bs";
const FNotes = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [kategori_id, setKategoriId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = {
      "title": title,
      "description": description,
      "kategori_id": kategori_id
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/notes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(newNote)
      });

      const data = await response.json();
      console.log(data); // Tampilkan response dari Laravel (berisi detail catatan baru)
      
      // Reset form
      setTitle('');
      setDescription('');
      setKategoriId('');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
 
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col h-screen justify-between">
        <nav  className="bg-white border-gray-200 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
            <Link to="/">
              <a class="flex items-center">
                <MdKeyboardArrowLeft
                  size={
                      35
                    }
                  />
                   <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                     Notes
                   </span>
                 </a>
              </Link>
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
                      type="submit"
                      class="text-black border border-1 border-black hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Done
                    </button>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
        <main className="mb-auto h-10  p-4">
        <div className="container px-5">
          <div className="text-3xl hover:border-none hover:outline-none">
          <input type="text" 
            className="outline-none border-none w-1/2 text-3xl hover:border-none hover:outline-none"
            value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          </div>
          <div className="border-b my-5">
        
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
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
            <input type="text" value={kategori_id} onChange={(e) => setKategoriId(e.target.value)} placeholder="Kategori ID" />
            {/* <button type="submit">Add Note</button> */}
        </div>
        </main>
      </div>
    </form>
  );
}

export default FNotes;
