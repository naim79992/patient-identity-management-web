import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { EducationContext } from "@/context/Education";
import { InfinitySpin } from "react-loader-spinner";


const Home = () => {
  const router = useRouter(); //front end e page cng krte
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
    if (ConnectedAccountUser != 0) {
      router.push("/dashboard");
    } else {
      router.push("/signup");
    }
  }, [ConnectedAccountUser]);
  return (
    <div>
      {/* <MainComponent /> */}
      {/* <SetPatientPersonalDetails /> */}
    
    </div>
  );
};

export default Home;
