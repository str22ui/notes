import React, { useState, useEffect } from 'react';
import Dash from "./Dash";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  BsTrash,
} from "react-icons/bs";
import Modal from 'react-modal';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const [noteToDelete, setNoteToDelete] = useState(null); // State to store the note to delete
  const navigate = useNavigate();
  useEffect(() => {
      let token = localStorage.getItem('token');
  
      if(token === null){
        navigate('/login')
      }
  

    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/notes', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          // Memastikan bahwa data.notes adalah array sebelum menggunakannya
          if (Array.isArray(data.data)) {
            setNotes(data.data);
          } else {
            console.log('Invalid notes data:', data);
          }
        } else {
          console.log('Failed to fetch notes:', data);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchNotes();
  }, []);

  const editNote = (note) => {
    localStorage.setItem('editNote', JSON.stringify(note));
    navigate('/enotes');
  };
  
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Remove the deleted note from the local state
      setNotes(notes.filter((note) => note.id !== id));
      toast.success('You successfully deleted the data.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log('Error deleting note:', error);
    } finally {
      // Close the modal after deletion
      setShowModal(false);
    }
    // } catch (error) {
    //   console.log('Error deleting note:', error);
    // }
  };
  const handleDeleteClick = (event, note) => {
    event.stopPropagation(); // Prevent event propagation
    // Set the note to delete and show the modal
    setNoteToDelete(note);
    setShowModal(true);
  };

  const handleModalClose = () => {
    // Close the modal without deleting
    setShowModal(false);
    setNoteToDelete(null);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="overflow-x-hidden">
        {/* <Dash /> */}
        <div className="container mx-auto p-4">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block border-none w-96 p-4 pl-10 text-sm text-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Searh your notes"
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                required
              />
            </div>
          </form>
          <div className="my-5">
            {filteredNotes.map((note) => (
              
              <div key={note.id} 
              onClick={() => editNote(note)} 
              className="cursor-pointer flex items-center justify-between rounded-lg bg-white my-2 p-6 dark:bg-[#5296DE]">
                <div>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" id='title'>
                    {note.title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" id='description'>
                    {note.description}
                  </p>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" id='kategori_id'>
                    {note.kategori_id}
                  </p>
                </div>
                <div className="flex space-x-2">
                  
                  {/* <BsTrash
                    className="mt-2"
                    size={25}
                    onClick={() => deleteNote(note.id)}
                  /> */}
                  <BsTrash
                className="mt-2"
                size={20}
                color='white'
                onClick={(event) => handleDeleteClick(event, note)} // Pass the event parameter to the function
              />
                </div>
              </div>
             
            ))}
          </div>
        </div>
        <Link to="/fnotes">
          <button
            type="submit"
            className="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
            New
            Notes
          </button>
        </Link>
         {/* Confirmation Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleModalClose}
        contentLabel="Delete Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Are you sure you want to delete this note?</h2>
        <div className="modal-buttons">
          <button onClick={() => deleteNote(noteToDelete.id)} className="delete-button">
            Delete
          </button>
          <button onClick={handleModalClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </Modal>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </div>
    
  );
};

export default Notes;
