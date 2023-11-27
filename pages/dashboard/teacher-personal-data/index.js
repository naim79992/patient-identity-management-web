import GetTeacherPersonalData from "@/Pages/Components/DashBoard/Teacher/GetDoctorPersonalData";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";

const TeacherPersonalData = () => {
  return (
    <DashboardLayout>
      <GetTeacherPersonalData />
    </DashboardLayout>
  );
};

export default IsAuth(TeacherPersonalData);
