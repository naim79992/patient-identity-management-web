import React, { useContext } from "react";
import Styles from "./BoxButton.module.css";
import { EducationContext } from "@/context/Education";

const BoxButton = ({ name, handleFunction }) => {
  const {
    account,
  } = useContext(EducationContext);
  const handle = () => {
    handleFunction(account);
  };
  return (
    <div
      className={Styles.box}
      onClick={() => {
        handle();
      }}
    >
      {name}
    </div>
  );
};

export default BoxButton;
