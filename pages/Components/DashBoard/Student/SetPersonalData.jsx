import React, { useContext, useState } from "react";
import { EducationContext } from "@/context/Education";
import BoxButton from "@/pages/Components/BoxButton";

const SetPersonalHealthData = () => {
  const {
    setStudentPersonalData,
  } = useContext(EducationContext);
 
  const [courseName, setcourseName] = useState('');
  const [time, settime] = useState('');
  const [topic, settopic] = useState("");
  const [date, setdate] = useState("");
  const [completeStatus, setcompleteStatus] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "courseName") {
      setcourseName(value);
    } else if (name === "time") {
      settime(value);
    } else if (name === "topic") {
      settopic(value);
    } else if (name === "date") {
      setdate(value);
    } else if (name === "completeStatus") {
      setcompleteStatus(value);
    } else if (name === "chronicDiseases") {
      setchronicDiseases(value);
    } else if (name === "healthAllergies") {
      sethealthAllergies(value);
    } else if (name === "birthDefects") {
      setbirthDefects(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!courseName) {
      newErrors.courseName = "Please enter your courseName";
    } else {
      newErrors.courseName = " ";
    }
    if (!time) {
      newErrors.time = "Please enter your time";
    } else {
      newErrors.time = " ";
    }
    if (!topic) {
      newErrors.topic = "Please enter your topic";
    } else {
      newErrors.topic = " ";
    }

    if (!date) {
      newErrors.date = "Please enter your date";
    } else {
      newErrors.date = " ";
    }

    if (!completeStatus) {
      newErrors.completeStatus = "Please enter your patientID";
    } else {
      newErrors.completeStatus = " ";
    }
 

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateForm() ||
      (courseName !== 0 &&
        time !== " " &&
        topic !== "" &&
        date !== " " &&
        completeStatus !== " ")
    ) {
      // Perform form submission

      console.log("Form submitted");
      setStudentPersonalData(
        courseName,
        time,
        topic,
        date,
        completeStatus
       
      );
    } else {
      console.log("please fill up all feild");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
    <div className="card p-4 bg-green-300 w-2/3 mt-16">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">
            Course Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            name="courseName"
            value={courseName}
            onChange={handleInputChange}
            placeholder="Enter your courseName"
          />
          {errors.courseName && (
            <span className="text-danger">{errors.courseName}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time:
          </label>
          <input
            type="text"
            className="form-control"
            id="time"
            name="time"
            value={time}
            onChange={handleInputChange}
            placeholder="Enter your time"
          />
          {errors.time && (
            <span className="text-danger">{errors.time}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="topic" className="form-label">
            Topic:
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
            name="topic"
            value={topic}
            onChange={handleInputChange}
            placeholder="Enter your topic"
          />
          {errors.topic && (
            <span className="text-danger">{errors.topic}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="text"
            className="form-control"
            id="date"
            name="date"
            value={date}
            onChange={handleInputChange}
            placeholder="Enter your date"
          />
          {errors.date && (
            <span className="text-danger">{errors.date}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="completeStatus" className="form-label">
            Complete Status:
          </label>
          <input
            type="text"
            className="form-control"
            id="completeStatus"
            name="completeStatus"
            value={completeStatus}
            onChange={handleInputChange}
            placeholder="Enter your completeStatus"
          />
          {errors.completeStatus && (
            <span className="text-danger">{errors.completeStatus}</span>
          )}
        </div>

        <div className="d-grid">
        <button
                    type="submit btn btn-primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
        </div>
      </form>
    </div>
  </div>
        
    
  );
};

export default SetPersonalHealthData;
