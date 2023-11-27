import FileUpload from "@/pages/Components/File/FileUpload";
import React, { useContext } from "react";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import { EducationContext } from "@/context/Education";
import TransferData from "@/Pages/Components/DashBoard/Student/TransferData";

const PatientFileUpload = () => {
  const { account, transferDataByStudent } = useContext(EducationContext);
  return (
    <DashboardLayout>
      <FileUpload userAddress={account} />
      <TransferData transferData={transferDataByStudent} />
    </DashboardLayout>
  );
};

export default IsAuth(PatientFileUpload);
