import React from "react";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
import IsAuth from "../Components/ProtectedRoute/IsAuth";
import Image from 'next/image';
const page = () => {
  return (
    <DashboardLayout>

      <div className="container">
        <div className="alert alert-success" role="alert">
        <div className="text-center d-flex justify-content-center">
        <Image
          src="/a.png" // Replace with the actual path to your image in the public folder
          alt="EdCheck Logo"
          width={300}  // Adjust the width as needed
          height={100} // Adjust the height as needed
        />
          </div>
          <br />
          <h4 className="alert-heading">🌟 Welcome to EdCheck!</h4>
          
        <p>
          Dear Students and Teachers,
        </p>
        <p>
          We're delighted to welcome you to EdCheck, your dedicated space for digital assignment evaluation.
          Whether you're a student striving for excellence or a teacher committed to guiding and inspiring, EdCheck is designed to make the evaluation process efficient, transparent, and rewarding.
        </p>

        <h5 className="mt-4">📚 For Students:</h5>
        <p>
          Explore a user-friendly interface where you can submit your assignments, track their progress, and receive timely feedback.
          At EdCheck, we believe that every assignment is an opportunity for growth, and we're here to support your educational journey.
        </p>

        <h5 className="mt-4">👩‍🏫 For Teachers:</h5>
        <p>
          Facilitate a smoother evaluation process with our intuitive tools. Provide constructive feedback, monitor student performance, and foster a collaborative learning environment.
          Your expertise shapes the future, and EdCheck is here to empower your teaching experience.
        </p>

        <h5 className="mt-4">🚀 Key Features:</h5>
        <ul>
          <li><strong>Effortless Submission:</strong> Submit assignments with just a few clicks.</li>
          <li><strong>Transparent Evaluation:</strong> Track your assignment's evaluation process in real-time.</li>
          <li><strong>Constructive Feedback:</strong> Receive valuable insights to enhance your learning experience.</li>
          <li><strong>Collaborative Environment:</strong> Teachers and students working together for academic success.</li>
        </ul>

        <h5 className="mt-4">🔧 How to Get Started:</h5>
        <ol>
          <li>Log in with your credentials.</li>
          <li>Explore your EdCheck dashboard for assignments and feedback.</li>
          <li>Engage in a collaborative learning journey.</li>
        </ol>

        <p className="mt-4">🙌 We're here to make education better, together!</p>

        <p>If you have any questions or need assistance, don't hesitate to reach out to our support team. Thank you for being a part of the EdCheck community.</p>

        <p>Happy learning!</p>

        <p className="mt-4">Best regards, <br /> The EdCheck Team 🚀</p>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default IsAuth(page);
