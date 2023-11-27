import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";
import PatientPersonalDoctors from "@/Pages/Components/DashBoard/Student/StudentPersonalTeachers";

const StudentPersonaTeacherList = () => {
  return (
    <DashboardLayout>
      <PatientPersonalDoctors />
    </DashboardLayout>
  );
};

export default IsAuth(StudentPersonaTeacherList);
