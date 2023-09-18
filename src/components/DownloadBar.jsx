import { getDownloadURL, ref } from "firebase/storage";
import PropTypes from "prop-types";
import { storage } from "../firebase-config";

const DownloadBar = ({ label, path }) => {
  const downloadFile = () => {
    const fileRef = ref(storage, path);
    getDownloadURL(fileRef)
      .then((url) => {
        window.open(url, "_blank");
      })
      .catch((error) => {
        console.log("Somthing get wrong");
        console.log(error);
      });
  };

  return (
    <div className="mt-6 flex flex-col items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-4 py-2 md:flex-row">
      <p className="mb-2 text-center font-semibold md:mb-0">{label}</p>
      <button
        onClick={downloadFile}
        className="rounded-md bg-emerald-800 px-2 py-1 font-semibold hover:bg-emerald-600"
      >
        Télécharger
      </button>
    </div>
  );
};

DownloadBar.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

export default DownloadBar;
