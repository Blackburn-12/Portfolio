import React from "react";
import Navbar from "./Navbar";

const HackathonProject = () => {
  return (
    <>
      <div className="bg-dark min-h-screen">
        <Navbar />

        <div className="p-5">
          <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
            Saylani Admission Portal
          </h1>

          <h2 className="mt-4 text-xl text-white font-Quicksand">
            <span className="font-semibold">Team Name:</span> CODE CRUSADERS
          </h2>
          <h3 className="text-lg mt-2 text-white font-Quicksand">
            <span className="font-semibold">Team Lead:</span> Muhammad Abdullah
          </h3>
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Collaborators:
          </h3>
          <ul className="list-disc list-inside ml-5 mt-2 text-white font-Quicksand">
            <li>Syed Sameel Ali</li>
            <li>Muhammad Haseeb Hassan</li>
            <li>Faizan Ahmed</li>
            <li>Muhammad Abdullah</li>
          </ul>
        </div>

        <div className="p-5">
          <h2 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Project Overview:
          </h2>
          <p className="text-white mt-2 font-Quicksand">
            The Saylani Admission Portal is a comprehensive web application
            designed to streamline the admission process for Saylani's
            educational programs. The portal consists of two main components:
            the Student Portal and the Admin Portal. Leveraging the power of OCR
            (Optical Character Recognition) technology by Google, the portal
            automates and simplifies various stages of the admission process,
            providing a seamless experience for both applicants and
            administrators.
          </p>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Technical Stack:
          </h3>
          <ul className="list-disc list-inside ml-5 mt-2 text-white font-Quicksand">
            <li>Frontend: React.js, Tailwind CSS, React Router DOM</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>OCR Technology: Tesseract.js (Google OCR)</li>
            <li>Version Control: Git, GitHub</li>
            <li>Deployment: Vercel</li>
            <li>Email Notifications: Nodemailer</li>
          </ul>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Student Portal:
          </h3>
          <ul className="list-disc list-inside ml-5 mt-2 text-white font-Quicksand">
            <li>
              <strong>Sign-Up Process:</strong> Students begin by signing up on
              the portal. They are required to upload their CNIC (Computerized
              National Identity Card). The OCR technology automatically extracts
              and inputs the relevant data into the registration form,
              minimizing manual errors and saving time.
            </li>
            <li>
              Email Confirmation: Upon successful registration, the student
              receives a confirmation email containing their registration
              details.
            </li>
            <li>Submission and Dashboard:</li>
            <ul className="list-disc list-inside ml-10 mt-2">
              <li>
                <strong>Form Submission:</strong> After filling in the necessary
                details, students submit their registration form.
              </li>
              <li>
                <strong>Dashboard Access:</strong> Successful submission
                redirects students to their dashboard, where they can download
                their ID card or enrollment card.
              </li>
              <li>
                <strong>Test Status:</strong> The dashboard displays the
                student's test status (Pending/Pass/Fail). This status is
                conditional and rendered based on the test performance, as
                evaluated and updated by the admin.
              </li>
              <li>
                <strong>Class Component:</strong> Once the student passes the
                test, classes are allocated by the admin, and the information is
                reflected in the dashboard.
              </li>
            </ul>
          </ul>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Admin Portal:
          </h3>
          <ul className="list-disc list-inside ml-5 mt-2 text-white font-Quicksand">
            <li>
              <strong>Admin Sign-Up and Login:</strong> Admins can sign up by
              providing their credentials. Upon successful registration, they
              receive an email containing a pin code or password for login
              purposes.
            </li>
            <li>
              <strong>Login:</strong> After signing up, admins can log in using
              their credentials, leading them to the dashboard.
            </li>
            <li>
              <strong>Dashboard Features:</strong>
              <ul className="list-disc list-inside ml-10 mt-2">
                <li>
                  Student Information Mapping: The dashboard displays
                  comprehensive information about all registered students,
                  including gender-specific counts.
                </li>
                <li>
                  Class Allocation: Admins can navigate to the "Courses" tab to
                  allocate classes to students. This allocation can be done by
                  selecting the appropriate course and test venue.
                </li>
                <li>
                  Email Notifications: Once classes and test venues are
                  allocated, students are automatically notified via email,
                  providing them with the necessary details about the test,
                  including date, time, and venue.
                </li>
                <li>
                  Editing and Venue Management: Admins have the authority to
                  edit student information, add more test venues, and manage the
                  overall admission process effectively.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Project Flow:
          </h3>
          <ul className="list-disc list-inside ml-5 mt-2 text-white font-Quicksand">
            <li>
              <strong>Student Portal:</strong>
              <ul className="list-disc list-inside ml-10 mt-2">
                <li>Sign Up: OCR implemented for auto-filling CNIC details.</li>
                <li>Submission: Students submit their registration forms.</li>
                <li>
                  Success/Fail: Students receive an email confirming
                  registration. Based on submission status:
                  <ul className="list-disc list-inside ml-10 mt-2">
                    <li>Success: Redirected to the dashboard.</li>
                    <li>
                      Fail: Receive feedback and can attempt resubmission.
                    </li>
                  </ul>
                </li>
                <li>
                  Dashboard Access: Students can download their ID card and view
                  their test status.
                </li>
                <li>
                  Class Allocation: Upon passing, the admin allocates classes,
                  and the information is updated on the student’s dashboard.
                </li>
              </ul>
            </li>
            <li>
              <strong>Admin Portal:</strong>
              <ul className="list-disc list-inside ml-10 mt-2">
                <li>
                  Sign Up: Admins register and receive a pin code/password via
                  email.
                </li>
                <li>Login: Admins log in and access the dashboard.</li>
                <li>
                  Dashboard Features:
                  <ul className="list-disc list-inside ml-10 mt-2">
                    <li>
                      View total student count with gender differentiation.
                    </li>
                    <li>
                      Allocate classes and test venues by navigating to the
                      "Courses" tab.
                    </li>
                    <li>Notify students of test details via email.</li>
                    <li>Edit student information and manage test venues.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Conclusion:
          </h3>
          <p className="text-white mt-2 font-Quicksand">
            The Saylani Admission Portal successfully streamlines the admission
            process, making it more efficient and user-friendly. By integrating
            OCR technology and providing comprehensive admin tools, the portal
            minimizes manual work, reduces errors, and enhances the overall
            experience for both students and administrators. This project
            showcases the potential of technology in transforming traditional
            administrative processes and sets a new standard for educational
            admissions.
          </p>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mt-2 text-white font-Quicksand">
            Visit:
          </h3>

          <p className="text-white mt-1 font-Quicksand">Admin Portal</p>
          <a
            href="https://admin-smit.vercel.app/login"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            https://admin-smit.vercel.app/login
          </a>

          <p className="text-white mt-4 font-Quicksand">Student Portal</p>
          <a
            href="https://students-smit.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            https://students-smit.vercel.app/
          </a>
        </div>
      </div>
    </>
  );
};

export default HackathonProject;
