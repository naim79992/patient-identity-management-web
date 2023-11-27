import React, { useContext } from "react";
import { EducationContext } from "@/context/Education";
import TransferData from "@/Pages/Components/DashBoard/Student/TransferData";

const ShareDataByStudent = () => {
  const { transferDataByStudent } = useContext(EducationContext);

  return (
    <div>
      <TransferData transferData={transferDataByStudent} />
    </div>
  );
};

export default ShareDataByStudent;
