import React, { useContext, useState } from "react";
import BoxButton from "../../BoxButton";
import { EducationContext } from "@/context/Education";

const SetTeacherPersonalData = () => {
  const {
    AddTeacher
  } = useContext(EducationContext);
  const [name, setName] = useState("");
  const [teacherID, setTeacherID] = useState("");
  const [specialty, setspecialty] = useState("");

  const [BMDCNumber, setBMDCNumber] = useState("");
  const [yearOfExperience, setyearOfExperience] = useState("");
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "teacherID") {
      setTeacherID(value);
    } else if (name === "BMDCNumber") {
      setBMDCNumber(value);
    }  else if (name === "specialty") {
      setspecialty(value);
    } else if (name === "yearOfExperience") {
      setyearOfExperience(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!teacherID) {
      newErrors.teacherID = "Please enter your TeacherID";
    } else {
      newErrors.teacherID = " ";
    }
    if (!name) {
      newErrors.name = "Please enter your name";
    } else {
      newErrors.name = " ";
    }
    if (!specialty) {
      newErrors.specialty = "Please enter your specialty";
    } else {
      newErrors.specialty = " ";
    }

    if (!yearOfExperience) {
      newErrors.yearOfExperience = "Please enter your yearOfExperience";
    } else {
      newErrors.yearOfExperience = " ";
    }

    if (!BMDCNumber) {
      newErrors.BMDCNumber = "Please enter your BMDCNumber";
    } else {
      newErrors.BMDCNumber = " ";
    }

  

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateForm() ||
      (name !== " "  &&
        teacherID !== "" &&
        specialty !== " " &&
        BMDCNumber !== " " &&
        yearOfExperience !== " ")
    ) {
      // Perform form submission

      console.log("Form submitted");
      AddTeacher(
        teacherID,
        name,
        specialty,
        
        BMDCNumber,
        yearOfExperience
      );
    } else {
      console.log("please fill up all feild");
    }
  };

  return (
    <div>
      <button
        type=""
        class="align-content-center justify-content-center  d-flex align-content-sm-center"
        data-bs-toggle="modal"
        data-bs-target="#modalFour"
        data-bs-whatever="@mdo"
      >
        <BoxButton name="Teacher" handleFunction={() => { }} />
      </button>

      <div
        class="modal fade"
        id="modalFour"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                class="btn-close mx-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    TeacherID :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="teacherID"
                    name="teacherID"
                    placeholder="Enter your teacherID"
                    value={teacherID}
                    onChange={handleInputChange}
                  />
                  {errors.teacherID && <span>{errors.teacherID}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    name :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                  />
                  {errors.name && <span>{errors.name}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    BMDCNumber :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="BMDCNumber"
                    name="BMDCNumber"
                    value={BMDCNumber}
                    placeholder="Enter your BMDCNumber"
                    onChange={handleInputChange}
                  />
                  {errors.BMDCNumber && <span>{errors.BMDCNumber}</span>}
                </div>
                
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    specialty :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="specialty"
                    name="specialty"
                    value={specialty}
                    onChange={handleInputChange}
                    placeholder="Enter your specialty"
                  />
                  {errors.specialty && <span>{errors.specialty}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    yearOfExperience :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="yearOfExperience"
                    name="yearOfExperience"
                    value={yearOfExperience}
                    onChange={handleInputChange}
                    placeholder="Enter your yearOfExperience"
                  />
                  {errors.yearOfExperience && (
                    <span>{errors.yearOfExperience}</span>
                  )}
                </div>
                <div class="modal-footer">
                  <button
                    type="btn btn-dark"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit btn btn-primary" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetTeacherPersonalData;
