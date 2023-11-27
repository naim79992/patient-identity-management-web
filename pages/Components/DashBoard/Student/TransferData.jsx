import React, { useContext } from "react";
import { EducationContext } from "@/context/Education";

const TransferData = () => {
  const { account, transferDataByStudent } = useContext(EducationContext);
  const shareData = () => {
    const userAddess = document.querySelector(".address").value;
    try {
      if (userAddess) {
        transferDataByStudent(userAddess);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container my-2">
      <div className="card p-4 bg-green-100">
        <h1 className="mb-2"><b>Share Data</b></h1>
        <input
          type="text"
          placeholder="address"
          className="address form-control"
        />
        <button className="center btn btn-primary mt-2" onClick={shareData}>
          Share data
        </button>
      </div>
    </div>
  );
};

export default TransferData;
