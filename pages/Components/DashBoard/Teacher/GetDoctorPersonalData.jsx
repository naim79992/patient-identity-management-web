import { EducationContext } from "@/context/Education";
import React, { useContext, useEffect } from "react";

const GetTeacherPersonalData = () => {
  const {
    getTeacherAllData,
    teacherData,
  } = useContext(EducationContext);
  useEffect(() => {
    getTeacherAllData();
  }, []);
  return (
    <div className="container pt-5">
      <div class="modal-body">
        Account: {teacherData[0]}
        <hr />
        TeacherId: {String(teacherData[1])}
        <hr />
        Teacher Name: {teacherData[2]}
        <hr />
        BMDC Number: {String(teacherData[4])}
        <hr />
        Teacher Speciality: {teacherData[3]}
        <hr />
        
        Year Of Experience: {String(teacherData[5])}
      </div>
      {console.log('teacherData',teacherData)}
    </div>
  );
};

export default GetTeacherPersonalData;
