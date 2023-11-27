import { useContext, useState } from "react";
import axios from "axios";
// import './FileUpload.css';
import Styles from "./FileUpload.module.css";
import { EducationContext } from "@/context/Education";

const FileUpload = ({ userAddress }) => {
  const {
    account,
    signer,
  } = useContext(EducationContext);
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("No image selected");

  const handleSubmit = async (e) => {
    console.log("address", userAddress);
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `
            5c1e110312968c506f0b`,
            pinata_secret_api_key: `
            cca432217da7e9c74550a8c182b9c1a6805f57811500d9cf4aad16ff6191c187`,
            "Content-Type": "multipart/form-data",
          },
        });

        const imgHash = `ipfs://${resFile.data.IpfsHash}`;
        signer.addPrescription(userAddress, imgHash);
        alert("Successfully Image Uploaded");
        setFilename("No image selected");
        setFile(null);
      } catch (error) {
        alert("Unable to upload image to Pinata");
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFilename(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="container pt-2">
      <div className="card p-4 bg-green-100">
        <form className={Styles.form} onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="file-upload" className="form-lebel my-2">
              <b>Choose Image</b>
            </label>
            <input
              type="file"
              disabled={!account}
              id="file-upload"
              name="data"
              className="form-control"
              onChange={retrieveFile}
            />
          </div>
          <span className={Styles.textArea}>Image : {filename}</span>
          <button
            type="submit"
            className="btn btn-success block my-4"
            style={{ backgroundColor: "green" }}>
            Upload file
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
