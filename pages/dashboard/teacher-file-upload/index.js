import SentDoc from "@/Pages/Components/DashBoard/Teacher/SentAssignment";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";

const UploadPrescription = () => {
  return (
    <DashboardLayout>
      <SentDoc />
    </DashboardLayout>
  );
};

export default IsAuth(UploadPrescription);
