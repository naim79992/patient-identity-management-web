import { EducationContext, HealthContext } from "@/context/Education";
import React, { useContext, useEffect } from "react";
import BoxButton from "../../BoxButton";

const GetPersonalDetails = () => {
  const {
    account,
    getStudentAllData,
    studentData,
  } = useContext(EducationContext);

  useEffect(() => {
    getStudentAllData(account);
  }, []);

  return (
    <div className="container pt-5">
      <div class="card card-body">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">
            Student Basic Information
          </h5>
        </div>
        <div class="modal-body">
          Account: {studentData[0]}
          <hr />
          StudentId: {String(studentData[1])}
          <hr />
          Student Name: {studentData[2]}
          <hr />
          Student Gender: {studentData[3]}
          <hr />
          Student Age: {String(studentData[4])}
          <hr />
          Student Location: {studentData[5]}
        </div>
        {console.log('studentData',studentData)}
      </div>
    </div>
  );
};

export default GetPersonalDetails;
