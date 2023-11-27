import TeachersStudentList from "@/Pages/Components/DashBoard/Teacher/TeachersStudentList";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";

const StudentList = () => {
  return (
    <DashboardLayout>
      <TeachersStudentList />
    </DashboardLayout>
  );
};

export default IsAuth(StudentList);
