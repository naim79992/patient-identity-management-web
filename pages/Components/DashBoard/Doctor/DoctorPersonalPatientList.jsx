import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const DoctorPersonalPatientList = () => {
  const {
    account,
    AddNewPatient,
    transferDataByPatient,
    AddMedicalResearchLab,
    AddNewpathologist,
    AddNewPharmacyCompany,
    AddDoctor,
    getPharmacyCompanyAllData,
    getPathologistAllData,
    getMedicalResearchLabAData,
    getDoctorAllData,
    getPatientAllData,
    fetchData,
    TopMedichine,
    doctorData,
    patientData,
    PharmacyCompany,
    MedicalResearchLab,
    contractData,
    PathologistData,
    signer,
    ConnectedAccountUser,
    MedicalResearchLabReport,
    MedicalResearchLabReports,
    ConnectedEntityType,
    addTopMedichine,
    addLabReport,
    setPatientPersonalData,
    transferDataByDoctor,
    transferDataByPathologist,
    setPathologistTest,
    ViewTopMedichine,
    patientPersonalDoctorList,
    DoctorPersonalPatient,
  } = useContext(HealthContext);

  return (
    <div>
      <h1> Patient List</h1>
      {DoctorPersonalPatient.map((el, i) => (
        <div key={i}>{el}</div>
      ))}

      {console.log("dpp", DoctorPersonalPatient)}
    </div>
  );
};

export default DoctorPersonalPatientList;
