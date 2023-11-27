import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";
import SetPersonalHealthData from "@/Pages/Components/DashBoard/Student/SetPersonalData";

const AddPersonalData = () => {
  return (
    <DashboardLayout>
      <SetPersonalHealthData />
    </DashboardLayout>
  );
};

export default IsAuth(AddPersonalData);
