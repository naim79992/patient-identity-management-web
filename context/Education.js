import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {

  studentABI,
  studentAddress,
} from "./constants";
import { useRouter } from "next/router";
import {
  connectWallet,
  connectWalletBycontractData,
} from "@/Utils/apiFreature";

export const EducationContext = React.createContext();
const EducationProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState("");
  const [teacherData, setTeacherData] = useState("");

  const [contractData, setContractData] = useState("");
 

 
  const [signer, setSigner] = useState("");

  const [ConnectedAccountUser, setConnectedAccountUser] = useState(0);
  const [studentPersonalData, setstudentPersonalData] = useState(
    []
  );
  const [studentPersonalTeacherList, setStudentPersonalTeacherList] = useState(
    []
  );
  const [TeacherPersonalStudent, setTeacherPersonalStudent] = useState([]);
  const [studentToTeacherSharedData, setStudentToTeacherSharedData] = useState(
    []
  );



  const [sharedData, setSharedData] = useState([]);
  const router = useRouter();
  const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/nGjYP7xrrjnCnxraBgpbLxaXxgYylt0z`
  );
  useEffect(() => {
    // connectWallet();
    fetchData();
    getSigner();
    ConnectedEntityType();

    getSigner();
  }, []);

  const fetchData = async () => {
    try {
      const connectedAccount = await connectWallet();
      setAccount(connectedAccount);
      console.log("current account ", connectedAccount);

      const contractData = await connectWalletBycontractData(provider);
      console.log("oooo", contractData);
      setContractData(contractData);
      setAccount(connectedAccount);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentAllData = async (studentAddress) => {
    const contractData = await connectWalletBycontractData(provider);
    // const connectedAccount = await connectWallet();
    const studentData = await contractData.getStudent(studentAddress);
    setStudentData(studentData);
    setstudentPersonalData(studentData[9]);

    setStudentPersonalTeacherList(studentData);
    //console.log("studentData ", studentData);
  };
  const  getStudentAllAssignment = async (studentAddress) => {
    const contractData = await connectWalletBycontractData(provider);
    const connectedAccount = await connectWallet();
    const studentPrescription = await contractData[1].showSharedPrescription(
      studentAddress
    );
    setSharedData(studentPrescription);

    console.log("studentData ", studentPrescription);
  };

  const getTeacherAllData = async () => {
    const contractData = await connectWalletBycontractData(provider);
    const connectedAccount = await connectWallet();
    const teacherData = await contractData.getTeacher(connectedAccount);
    setTeacherData(teacherData);
    setTeacherPersonalStudent(teacherData[9]);
    setStudentToTeacherSharedData(teacherData[6]);
    console.log("teacherData", teacherData);
  };




 

  const ConnectedEntityType = async () => {
    try {
      setLoading(true);
      const contractData = await connectWalletBycontractData(provider);
      const connectedAccount = await connectWallet();
      const ConnectedAccountUserType =
        await contractData.ConnectedAccountType(connectedAccount);
      setConnectedAccountUser(String(ConnectedAccountUserType));
      console.log("ConnectedAccountUserType", String(ConnectedAccountUserType));
    } catch (error) {
      console.log("no account have in address");
    } finally {
      setLoading(false);
    }
  };

  const AddTeacher = async (
    teacherID,
    name,
    specialty,
    
    BMDCNumber,
    yearOfExperience
  ) => {
    // works
    // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        console.log("signer", signer);
        const contract = new ethers.Contract(studentAddress, studentABI, signer);

        const addNewTeacherData = await contract.setTeacher(
          BigInt(teacherID * 1),
          name,
          specialty,
          
          BigInt(BMDCNumber * 1),
          BigInt(yearOfExperience * 1)
        );

        await addNewTeacherData.wait();

        window.location.reload();
      } else {
        console.error("Metamask is not installed");
      }
    } catch (error) {
      console.log("error account crate time", error);
    }
  };

  const AddNewStudent = async (studentID, name, gender, age, location) => {
    // works
    // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        console.log("signer", signer);
        const contract = new ethers.Contract(
          studentAddress,
          studentABI,
          signer
        );

        const addNewStudentData = await contract.setStudent(
          studentID,
          name,
          gender,
          BigInt(age * 1),
          location
        );

        await addNewStudentData.wait();

        window.location.reload();
      } else {
        console.error("Metamask is not installed");
      }
    } catch (error) {
      console.log("error account crate time", error);
    }
  };

  const getSigner = async () => {
    // works
    // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        const contract = new ethers.Contract(studentAddress, studentABI, signer);
        console.log("signer", signer);
        setSigner(contract);
      } else {
        console.error("Metamask is not installed");
      }
    } catch (error) {
      console.log("error account crate time", error);
    }
  };

 
const setStudentPersonalData = async (
  courseName,
  time,
  topic,
  date,
  completeStatus
  ) => {


    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        console.log("signer", signer);
        const contract = new ethers.Contract(studentAddress, studentABI, signer);

        const addStudentPersonalData = await contract.addStudentPersonalData(
          courseName,
          time,
          topic,
          date,
          completeStatus
        );

        await addStudentPersonalData.wait();

        window.location.reload();
      } else {
        console.error("Metamask is not installed");
      }
    } catch (error) {
      console.log("error account crate time", error);
    }
  };

 
  const transferDataByStudent = async (receiptAddress) => {


    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        console.log("signer", signer);
        const contract = new ethers.Contract(
          studentAddress,
          studentABI,
          signer
        );

        const transferDatabyStudent = await contract.transferDataByStudent(
          receiptAddress
        );

        await transferDatabyStudent.wait();

        window.location.reload();
      } else {
        console.error("Metamask is not installed");
      }
    } catch (error) {
      console.log("error account crate time", error);
    }
  };


  return (
    <EducationContext.Provider
      value={{
        loading,
        account,
        AddNewStudent,
        transferDataByStudent,

        AddTeacher,

        getTeacherAllData,
        getStudentAllData,
        fetchData,
 
        teacherData,
        studentData,

        contractData,
  
        signer,
        ConnectedAccountUser,


        ConnectedEntityType,

        setStudentPersonalData,

        setStudentPersonalData,
        
        studentPersonalTeacherList,

        TeacherPersonalStudent,
        sharedData,
        studentToTeacherSharedData,
        studentPersonalData,
        getStudentAllAssignment,
      }}>
      {children}
    </EducationContext.Provider>
  );
};

export default EducationProvider;
