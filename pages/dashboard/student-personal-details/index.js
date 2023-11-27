import GetPersonalDetails from "@/Pages/Components/DashBoard/Student/GetPersonalDetails";
import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import DisplayFile from "@/pages/Components/File/DisplayFile";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React, { useContext } from "react";
import { EducationContext, HealthContext } from "@/context/Education";
import TransferData from "@/Pages/Components/DashBoard/Student/TransferData";

const PatientsDetails = () => {
  const {
    studentData,
  } = useContext(EducationContext);
  return (
    <DashboardLayout>
      <GetPersonalDetails />
      <DisplayFile userData={studentData} />
      <TransferData />
    </DashboardLayout>
  );
};

export default IsAuth(PatientsDetails);
