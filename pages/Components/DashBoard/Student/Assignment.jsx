import React, { useContext } from "react";
import FileUpload from "../../File/FileUpload";
import DisplayFile from "../../File/DisplayFile";

import BoxButton from "../../BoxButton";
import { EducationContext } from "@/context/Education";

const Assignment = () => {
  const {
    account,
    studentData,
  } = useContext(EducationContext);
  return (
    <div>
      <BoxButton name="Upload File" />

      <div>
        {console.log("jjjj", account)}
        <FileUpload userAddress={account} />
        <DisplayFile userData={studentData} />
      </div>
    </div>
  );
};

export default Assignment;
