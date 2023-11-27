// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract EducationalData {
    struct Student {
        address StudentAddress;
        uint256 StudentID;
        string name;
        string gender;
        uint256 age;
        string location;
        bool isAdded;
        string userType;
        string[] imgUrl;
        StudentPersonalData[] StudentPersonalData;
        address[] personalTeacher;
    }

    struct StudentPersonalData {
        string CourseName;
        string Time;
        string Topic;
        string Date;
        string completeStatus;
    }

    struct Teacher {
        address TeacherAddress;
        uint256 TeacherID;
        string name;
        string specialty;
        uint256 BMDCNumber;
        uint256 yearOfExperience;
        address[] StudentToTeacher; //data share of all Student
        string[] StudentTest;
        // data share of all Student
        bool isAdded;
        address[] personalStudent;
        string userType;
    }

    mapping(address => uint256) public accounts;
    mapping(address => Student) Students;
    mapping(address => Teacher) Teachers;

    // Problem 1

    // Setters and Getters for Student struct
    function setStudent(
        uint256 StudentID,
        string memory name,
        string memory gender,
        uint256 age,
        string memory location
    ) public {
        address user = msg.sender;
        require(
            Students[user].isAdded == false,
            "You have already created your profile"
        );

        Student storage student = Students[user];

        student.StudentAddress = user;
        student.StudentID = StudentID;
        student.name = name;
        student.gender = gender;
        student.age = age;
        accounts[user] = 2;
        student.location = location;
        student.isAdded = true;
        student.userType = "Student";
    }

    enum EntityType {
        Unknown,
        Teacher,
        Student
    }

    function addPrescription(address _user, string memory url) external {
        //Docto or Student addPrescription
        if (accounts[msg.sender] == uint256(EntityType.Teacher)) {
            require(Teachers[msg.sender].isAdded, "Teacher doesn't exist");
            // Teachers[msg.sender].imgUrl.push(url);
            if (accounts[_user] == uint256(EntityType.Student)) {
                Teachers[msg.sender].personalStudent.push(_user);
                Students[_user].imgUrl.push(url);
                Students[_user].personalTeacher.push(msg.sender);
            } else {
                revert("You don't addPrescription in this  entity ");
            }
        } else if (accounts[msg.sender] == uint256(EntityType.Student)) {
            require(Students[msg.sender].isAdded, "Student doesn't exist");
            Students[msg.sender].imgUrl.push(url);
        } else {
            revert("You don't addPrescription in this  entity ");
        }
    }

    function getTeacher(
        address _TeacherAddress
    ) public view returns (Teacher memory) {
        require(Teachers[_TeacherAddress].isAdded, "Teacher doesn't exist");

        return Teachers[_TeacherAddress];
    }

    function getStudent(
        address _StudentAddress
    ) public view returns (Student memory) {
        require(Students[_StudentAddress].isAdded, "Student does not exist");
        return Students[_StudentAddress];
    }

    // Setters and Getters for Teacher struct
    function setTeacher(
        uint256 TeacherID,
        string memory name,
        string memory specialty,
        uint256 BMDCNumber,
        uint256 yearOfExperience
    ) public {
        address user = msg.sender;
        require(
            Teachers[user].isAdded == false,
            "You already create your profile"
        );

        Teacher storage teacher = Teachers[user];

        teacher.TeacherAddress = user;
        teacher.TeacherID = TeacherID;
        teacher.name = name;
        teacher.specialty = specialty;

        teacher.BMDCNumber = BMDCNumber;
        teacher.yearOfExperience = yearOfExperience;
        teacher.userType = "Teacher";
        teacher.isAdded = true;
        accounts[user] = 1;
    }

    function transferDataByStudent(address useraddress) public {
        uint256 user0 = accounts[useraddress];

        if (2 == uint256(EntityType.Student)) {
            require(Students[msg.sender].isAdded, "Student doesn't exist");

            if (
                user0 == uint256(EntityType.Teacher) &&
                2 == uint256(EntityType.Student)
            ) {
                require(
                    Teachers[useraddress].BMDCNumber != 0,
                    "Teacher doesn't exist"
                );
                Teachers[useraddress].StudentToTeacher.push(msg.sender);
            } else {
                revert("Student can transfer data without pathologists ");
            }
        }
    }

    function showSharedPrescription(
        address StudentAddress
    ) public view returns (string[] memory imageUrl) {
        return Students[StudentAddress].imgUrl;
    }

    function ConnectedAccountType(
        address useraddress
    ) public view returns (uint256) {
        uint256 user0 = accounts[useraddress];

        if (user0 == uint256(EntityType.Teacher)) {
            return user0;
        } else if (user0 == uint256(EntityType.Student)) {
            return user0;
        } else {
            revert("No account");
        }
    }

    function addStudentPersonalData(
        string memory courseName,
        string memory time,
        string memory topic,
        string memory date,
        string memory completeStatus
    ) public {
        StudentPersonalData memory newPersonalData = StudentPersonalData({
            CourseName: courseName,
            Time: time,
            Topic: topic,
            Date: date,
            completeStatus: completeStatus
        });

        Students[msg.sender].StudentPersonalData.push(newPersonalData);
    }
}
