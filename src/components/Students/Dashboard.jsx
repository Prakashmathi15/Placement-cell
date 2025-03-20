import React, { useState } from "react";

const Dashboard = () => {
  const [jobDetails, setJobDetails] = useState([
    { id: 1, company_name: "🚀 Google", location: "Mountain View, CA" },
    { id: 2, company_name: "💻 Microsoft", location: "Redmond, WA" },
    { id: 3, company_name: "📦 Amazon", location: "Seattle, WA" },
    { id: 4, company_name: "📱 Facebook", location: "Menlo Park, CA" },
    { id: 5, company_name: "⚡ Tesla", location: "Austin, TX" }
  ]);

  // State for user input
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");

  // Handle form submission
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (companyName.trim() === "" || location.trim() === "") {
      alert("Please enter both company name and location.");
      return;
    }

    const newJob = {
      id: jobDetails.length + 1, // Assign a unique ID
      company_name: companyName,
      location: location
    };

    setJobDetails([...jobDetails, newJob]); // Add new job to the list
    setCompanyName(""); // Clear input fields
    setLocation("");
  };

  return (
    <>
      {/* Job Listings */}
      <ul style={{ textAlign: "left", listStyleType: "decimal", fontFamily: "Arial", paddingLeft: "10px" }}>
        {jobDetails.map((job) => (
          <li key={job.id}>
            {job.company_name} - {job.location}
            <br />
          </li>
        ))}
      </ul>

      {
      /* Form to Add Job Details */
      }
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input 
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name..."
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input 
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location..."
          />
        </div>
        <button type="submit">Add Job</button>
      </form>
    </>
  );
};

export default Dashboard;
