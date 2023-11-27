import React, { useContext } from "react";
import { EducationContext } from "@/context/Education";

const StudentPersonalDoctors = () => {
  const studentteacher = () => {
   try {
    studentPersonalTeacherList.map((el, i) => (
      <div className="w-3/5 ml-40 m-7">
        <div class="card">
          <div class="card-body text-center" key={i}>{el}

          </div>
        </div>

      </div>

    ))
   } catch (error) {
    
   }
  }
  const {
    studentPersonalTeacherList,
  } = useContext(EducationContext);
  return (
    <div>
      {studentteacher()}
    </div>
  );
};

export default StudentPersonalDoctors;
