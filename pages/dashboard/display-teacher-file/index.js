import DisplayPrescription from "@/Pages/Components/DashBoard/Teacher/DisplayAssignment";
import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";

const DisplayFile = () => {
  return (
    <DashboardLayout>
      <DisplayPrescription />
    </DashboardLayout>
  );
};

export default IsAuth(DisplayFile);
