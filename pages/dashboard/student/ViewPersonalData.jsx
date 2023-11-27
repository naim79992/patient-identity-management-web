import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";
import PersonalHealthData from "@/Pages/Components/DashBoard/Student/PersonalData";

const ViewPersonalData = () => {
  return (
    <DashboardLayout>
      <PersonalHealthData />
    </DashboardLayout>
  );
};

export default IsAuth(ViewPersonalData);
