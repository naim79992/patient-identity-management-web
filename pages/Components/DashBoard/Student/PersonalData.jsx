import React, { useContext, useEffect } from "react";
import { EducationContext } from "@/context/Education";

const PersonalHealthData = () => {
  const {
    account,
    getStudentAllData,
    studentPersonalData,
  } = useContext(EducationContext);

  useEffect(() => {
    getStudentAllData(account);
  }, []);

  return (
    <div className="container pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">
            Student Basic Information
          </h5>
        </div>
        <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Course name</th>
            <th>Time</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Complete status</th>
          </tr>
        </thead>
        <tbody>
          {studentPersonalData.map((data, index) => (
            <tr key={index}>
              <td>{data[0]}</td>
              <td>{data[1]}</td>
              <td>{data[2]}</td>
              <td>{data[3]}</td>
              <td>{data[4].toString()}</td> {/* Assuming completeStatus is a boolean */}
            </tr>
          ))}
        </tbody>
      </table>
      {console.log(studentPersonalData)}
    </div>
      </div>
    </div>
  );
};

export default PersonalHealthData;
