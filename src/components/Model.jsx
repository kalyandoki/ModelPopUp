import { useState } from "react";
import PopUp from "./PopUp";
function Model() {
  const [open, setOpen] = useState(false);

  function handleModelPopup() {
    setOpen(!open);
    console.log(!open);
  }

  const handleCancelBtn = () => {
    setOpen(!open);
    console.log(!open);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-4">
        {open ? null : (
          <button
            onClick={handleModelPopup}
            type="button"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700 active:scale-95 
           sm:px-6 sm:py-3 sm:text-lg sm:rounded-xl sm:shadow-lg"
          >
            Open Model Popup
          </button>
        )}
      </div>
      {open && <PopUp cancel={handleCancelBtn} />}
    </>
  );
}

export default Model;
