import React, { useContext, useState } from "react";
import BoxButton from "../../BoxButton";
import { EducationContext } from "@/context/Education";

const SetStudentPersonalDetails = () => {
  const {
    AddNewStudent,
  } = useContext(EducationContext);
  const [name, setName] = useState("");
  const [studentID, setstudentID] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [location, setlocation] = useState("");
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "studentID") {
      setstudentID(value);
    } else if (name === "gender") {
      setgender(value);
    } else if (name === "age") {
      setage(value);
    } else if (name === "location") {
      setlocation(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!studentID) {
      newErrors.studentID = "Please enter your studentID";
    } else {
      newErrors.studentID = " ";
    }
    if (!name) {
      newErrors.name = "Please enter your name";
    } else {
      newErrors.name = " ";
    }
    if (!gender) {
      newErrors.gender = "Please enter your gender";
    } else {
      newErrors.gender = " ";
    }

    if (!location) {
      newErrors.location = "Please enter your location";
    } else {
      newErrors.location = " ";
    }

    if (!studentID) {
      newErrors.studentID = "Please enter your studentID";
    } else {
      newErrors.studentID = " ";
    }

    if (!age) {
      newErrors.age = "Please enter your age";
    } else {
      newErrors.age = " ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateForm() ||
      (name !== " " &&
        age !== " " &&
        studentID !== "" &&
        location !== " " &&
        gender !== " ")
    ) {
      // Perform form submission

      console.log("Form submitted");
      AddNewStudent(studentID, name, gender, age, location);
    } else {
      console.log("please fill up all feild");
    }
  };

  return (
    <div>
      <button
        type=""
        class=" align-content-center justify-content-center  d-flex align-content-sm-center"
        data-bs-toggle="modal"
        data-bs-target="#modalOne"
        data-bs-whatever="@mdo"
      >
        <BoxButton name="Student" handleFunction={() => { }} />
      </button>

      <div
        class="modal fade"
        id="modalOne"
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
                    studentID :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="studentID"
                    name="studentID"
                    placeholder="Enter your studentID"
                    value={studentID}
                    onChange={handleInputChange}
                  />
                  {errors.studentID && <span>{errors.studentID}</span>}
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
                    gender :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="gender"
                    name="gender"
                    value={gender}
                    placeholder="Enter your gender"
                    onChange={handleInputChange}
                  />
                  {errors.gender && <span>{errors.gender}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    age :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="age"
                    name="age"
                    value={age}
                    placeholder="Enter your age"
                    onChange={handleInputChange}
                  />
                  {errors.age && <span>{errors.age}</span>}
                </div>
                <div className="mb-3">
                  <label>location :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="location"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Enter your location"
                  />
                  {errors.location && <span>{errors.location}</span>}
                </div>
                <div className="modal-footer">
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
        </div>
      </div>
    </div>
  );
};

export default SetStudentPersonalDetails;
