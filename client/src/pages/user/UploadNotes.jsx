import React, { useRef, useState } from 'react'
import { useUserApi } from '../../action/api/userAPIs';


function UploadNotes() {

  const titleInput = useRef();
  const dateInput = useRef();
  const subjectInput = useRef();
  const fileInput = useRef();

  const {uploadNotes} = useUserApi();


   


  function submitNotes(){
    const formData = new FormData();
    formData.append("title", titleInput.current.value);
    formData.append("date", dateInput.current.value);
    formData.append("subject", subjectInput.current.value);

    for (let i = 0; i < fileInput.current.files.length; i++) {
      formData.append("notes", fileInput.current.files[i]);
    }

    
    uploadNotes(formData);

  }   
  return (
    <div>
            <div>
                <label class="block text-gray-700 font-medium">Title:</label>
                <input ref={titleInput} type="text" name="title" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
                <label class="block text-gray-700 font-medium">Date:</label>
                <input ref={dateInput} type="date" name="date" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
                <label class="block text-gray-700 font-medium">Subject:</label>
                <select ref={subjectInput} name="subject" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required >
                    <option value="">Select Subject</option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="english">English</option>
                </select>
            </div>
            <div>
             
                <label class="block text-gray-700 font-medium">Note (PDF, DOCX):</label>
                <input ref={fileInput} type="file" multiple name="note" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button onClick={submitNotes} class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Upload</button>
    </div>
  )
}

export default UploadNotes
