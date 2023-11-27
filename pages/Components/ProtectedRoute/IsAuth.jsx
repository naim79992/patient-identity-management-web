import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { EducationContext } from "@/context/Education";

function IsAuth(Component) {
  const AuthWrapper = (props) => {
    const { loading, ConnectedAccountUser } = useContext(EducationContext);
    const router = useRouter();

    if (loading) {
      return <div>Loading...</div>;
    }

    useEffect(() => {
      if (ConnectedAccountUser === 0) {
        router.push("/");
      }
    }, [ConnectedAccountUser, router]);

    return <Component {...props} />;
  };

  return AuthWrapper;
}

export default IsAuth;
