import React, { useContext } from "react";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import { EducationContext, HealthContext } from "@/context/Education";
import SharedDataFromPathologist from "@/Pages/Components/DashBoard/Teacher/SharedDataFromPathologist";

const SharedDataToDoctor = () => {
  const { account, transferDataByPatient } = useContext(EducationContext);
  return (
    <div>
      <DashboardLayout>
        <SharedDataFromPathologist />
      </DashboardLayout>
    </div>
  );
};

export default IsAuth(SharedDataToDoctor);
