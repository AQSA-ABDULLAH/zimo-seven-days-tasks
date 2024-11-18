import { listAll, ref, getDownloadURL } from "firebase/storage"; // Import required Firebase storage methods
import { storage } from "../firebase/config"; // Ensure this exports a valid storage object
import { useState } from "react";

export default function ViewPhoto() {
  const [imageUrls, setImageUrls] = useState([]); // State to store the fetched image URLs

  const getPhotos = async () => {
    const storageRef = ref(storage, "images"); // Reference to the "custom" folder
    try {
      const response = await listAll(storageRef); // Get all items in the folder
      // Fetch download URLs for each file
      const urls = await Promise.all(
        response.items.map((item) => getDownloadURL(item))
      );
      setImageUrls(urls); // Update the state with the image URLs
      console.log(urls)
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  return (
    <div>
      <h1 className="mt-10">
        <button onClick={getPhotos}>Get Files</button>
      </h1>
      <div className="mt-5 flex flex-row">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`File ${index + 1}`}
              style={{ width: "100px", margin: "10px" }}
            />
          ))
        ) : (
          <p>No images fetched yet. Click "Get Files" to load.</p>
        )}
      </div>
    </div>
  );
}

