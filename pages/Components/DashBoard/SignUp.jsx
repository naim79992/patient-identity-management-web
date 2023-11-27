import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { EducationContext } from "@/context/Education";


import SetStudentPersonalDetails from "./Student/SetPersonalDetails";
import SetTeacherPersonalData from "./Teacher/SetTeacherPersonalData";
import { InfinitySpin } from "react-loader-spinner";

const SignUpComponent = () => {
  const router = useRouter();
  const { loading, ConnectedAccountUser } = useContext(EducationContext);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
    <InfinitySpin 
  width='200'
  color="#4fa94d"
/>
  </div>;
  }

  useEffect(() => {
    console.log(ConnectedAccountUser)
    if (ConnectedAccountUser != 0) {
      router.push("/dashboard");
    }
  }, [ConnectedAccountUser]);

  return (
    <div className="row  vh-100 bg-orange-200 vw-100 d-flex justify-content-center align-items-center pl-16" >
      <div className="col-md-3 mb-2 " >
        <SetStudentPersonalDetails />
      </div>

      <div className="col-md-3 mb-2">
        <SetTeacherPersonalData />
      </div>

    </div>
  );
};

export default SignUpComponent;
