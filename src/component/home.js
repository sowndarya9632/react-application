
/*import React, { useState } from "react"
import "./header.css"
//import img1 from "./person1.jpg"; 
//import img2 from "./person2.jpg";
//import img3 from "./person3.jpg";
//import img4 from "./person4.jpg";


const EmployeePayrollForm = () => {
  const checkboxOptions = ["HR", "Sales", "Finance", "Engineer", "Others"];

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    department: [],
    salary: "",
    startDate: "",
    notes: "",
    profileImage: "",
  });

 const handleInputChange = (event) => {
    console.log(event.target.value);
    
    const { name, value, type } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }));

  };

  // Specific handler for checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
  
    setFormData((prevData) => {
      let updatedDepartment = [...prevData.department];
  
      if (checked) {
        // Add the value if the box is checked
        updatedDepartment.push(value);
      } else {
        // Remove the value if the box is unchecked
        updatedDepartment = updatedDepartment.filter((item) => item !== value);
      }
  
      return {
        ...prevData,
        department: updatedDepartment,
      };
    });
  };
  
  const handleProfileSelect = (image) => {
    setFormData((prev) => ({ ...prev, profileImage: image }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };
  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      gender: "",
      department: [],
      salary: "",
      startDate: "",
      notes: "",
      profileImage: "",
    });
  };

  return (
    <div className="container">
      <div id="header1">
        <h1>EMPLOYEE</h1>
        <h2>PAYROLL</h2>
      </div>
   
    <div className="form-container">
      <div className="form-container2">
        <h1>Employee Payroll Form</h1><br>
        </br>
      <form onSubmit={handleSubmit}>
        <label>
        Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
            Profile Image:
            <div className="profile-images">
          {[].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="image profile"
                  className={formData.profileImage === image ? "selected" : ""}
                  onClick={() => handleProfileSelect(image)}
                />
              ))} 
            </div>
          </label>
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            Female
          </label>
        </label>

        <div className="department-container">
  Department:
  {checkboxOptions.map((option) => (
    <label key={option}>
      <input
        type="checkbox"
        value={option} // Correctly set the value
        checked={formData.department.includes(option)} // Reflect current state
        onChange={handleCheckboxChange} // Handle clicks
      />
      {option}
    </label>
  ))}
</div>

        <label>
          Salary:
          <select
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          >
            <option value="">Select Salary</option>
            <option value="20k">20k</option>
            <option value="40k">40k</option>
            <option value="60k">60k</option>
            <option value="80k">80k</option>
          </select>
        </label>

        <label>
          Start Date:
          <input
           type="date" 
           name="startDate" 
           value={formData.startDate} onChange={handleInputChange}
           />
            
        </label>

        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          ></textarea>
        </label>

        <div className="form-buttons">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleCancel} >
          Cancel
        </button>

        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default EmployeePayrollForm;*/

import React from "react";

function Child({ name }) {
  return <p>Hello, {name}!</p>;
}

function Parent() {
  const name = "Alice";
  return <Child name={name} />;  
}

export default Parent;
