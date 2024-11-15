"use client"

import React from "react";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const AddPhoto = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleFileChange = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0]);
  }

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setUploadedUrl(url);
      console.log("File Uploaded Succesfuly");
    } catch (error) {
      console.error('Error uploading the file', error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50"></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-50">
        <h3 className="text-lg font-semibold mb-4 text-center">Add New Partner</h3>

        {/* File Input */}
        <div className="relative">
          <input
            type="file"
            id="Image"
            name="Image"
            accept="image/png, image/jpeg"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 h-60">
            {uploadedUrl  ? (
              <img
                src={uploadedUrl }
                alt="Preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center">
                <MdCloudUpload className="text-6xl text-purple-500 mb-2" />
                <p className="text-sm text-gray-500">Click here to upload an image</p>
              </div>
            )}
          </div>
        </div>
       


        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPhoto;


