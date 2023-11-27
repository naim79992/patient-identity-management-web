import React, { useContext } from "react";
import { EducationContext } from "@/context/Education";

const TeachersStudentList = () => {
  const {
    TeacherPersonalStudent,
  } = useContext(EducationContext);

  return (
    <div>
      <h1> Student List</h1>
      {TeacherPersonalStudent.map((el, i) => (
        <div className="w-3/5 ml-40 m-7">
          <div class="card">
            <div class="card-body text-center" key={i}>{el}

            </div>
          </div>
{console.log(TeacherPersonalStudent)}
        </div>
      ))}

      {console.log("dpp", TeacherPersonalStudent)}
    </div>
  );
};

export default
  TeachersStudentList;
