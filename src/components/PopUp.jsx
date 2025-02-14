function PopUp({ cancel }) {
  return (
    <>
      <div className="flex items-center justify-center  bg-opacity-50 p-10">
        <div className="relative isolate overflow-hidden bg-gray-300 rounded-lg shadow-lg max-w-md w-full p-6 text-center">
          <button
            onClick={cancel}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
          <img
            src="https://img.freepik.com/free-photo/person-near-alternative-energy-plant_23-2149192730.jpg?t=st=1739534006~exp=1739537606~hmac=a4eefa575688c9a906641a5ffda581d0bcab4cad36cf1f721a2597f9d8aa15ce"
            alt="Modal Image"
            className="w-full h-50 object-cover rounded-lg mt-4"
          />

          <h2 className="text-xl font-bold mt-4">
            Industry and technology photos for your business
          </h2>

          <p className="text-gray-600 mt-2">
            Images are essential for your business, providing an image of
            success while also providing a clear direction for business goals.
            However, business sectors such as industry and technology require
            special attention. With technology reaching new heights and
            continuously evolving, imagery must reflect its advanced status and
            appeal to individuals with exceptional intellect. This specialist
            type of imagery is here and available for the very purpose of
            keeping the most complex minds captivated.
          </p>
        </div>
      </div>
    </>
  );
}

export default PopUp;
