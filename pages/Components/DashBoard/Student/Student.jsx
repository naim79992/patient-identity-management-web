import React from "react";
import SetPersonalHealthData from "@/Pages/Components/DashBoard/Student/SetPersonalData";
import PersonalHealthData from "@/Pages/Components/DashBoard/Student/PersonalData";
import ShareDataByStudent from "@/Pages/Components/DashBoard/Student/ShareDataByStudent";
import GetPersonalDetails from "@/Pages/Components/DashBoard/Student/GetPersonalDetails";

const StudentComponent = () => {
  return (
    <div>
      <GetPersonalDetails />
      <SetPersonalHealthData />
      <PersonalHealthData />
      <ShareDataByStudent />
      {/*<Prescription />*/}
      {/*<DisplayFile />*/}
    </div>
  );
};

export default StudentComponent;
