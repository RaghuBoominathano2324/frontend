import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Exam.css';

const Exams = () => {
  const examData = [
    {
      name: "GATE (Graduate Aptitude Test in Engineering)",
      date: "February 3, 2024",
      applicationDeadline: "September 30, 2023",
      eligibility: "Bachelor's degree in Engineering, Technology, or related fields",
      details: `
        Description: GATE tests comprehensive knowledge in various undergraduate subjects in engineering and science.
        Number of Questions: 65
        Duration: 3 hours
        Syllabus: General Aptitude, Engineering Mathematics, and subject-specific topics.
      `,
    },
    {
      name: "JEE (Joint Entrance Examination)",
      date: "April 15, 2024",
      applicationDeadline: "December 15, 2023",
      eligibility: "High school graduate or equivalent",
      details: `
        Description: JEE is an entrance exam for various technical institutes across India.
        Number of Questions: 90
        Duration: 3 hours
        Syllabus: Physics, Chemistry, Mathematics.
      `,
    },
  ];

  return (
    <div className="exam-schedule container mt-5">
      <h2 className="text-center mb-4" style={{ textDecoration: "underline", color: "red" }}>
        Exam Schedule for Technical Exams
      </h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Exam Name</th>
            <th>Date</th>
            <th>Application Deadline</th>
            <th>Eligibility</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {examData.map((exam, index) => (
            <tr key={index}>
              <td>{exam.name}</td>
              <td>{exam.date}</td>
              <td>{exam.applicationDeadline}</td>
              <td>{exam.eligibility}</td>
              <td style={{ whiteSpace: "pre-wrap" }}>{exam.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exams; // Make sure it's a default export
