"use client";
import { useState } from "react";
import { addEmployee } from "@/lib/addEmployee";

export default function page() {
  const [employeeData, setEmployeeData] = useState({
    EmployeeName: "",
    age: "",
    salary: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addEmployee(employeeData);
    setEmployeeData({
      EmployeeName: "",
      age: "",
      salary: "",
    });
  };

  return (
    <div className="mx-auto my-6 max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-100 p-10 "
      >
        <div className="my-6 flex justify-between items-center w-full flex-1">
          <label>
            Full Name:
            <input
              type="text"
              name="EmployeeName"
              value={employeeData.EmployeeName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
            />
          </label>
        </div>
        <div className="my-6 flex justify-between items-center w-full flex-1">
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={employeeData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto flex-grow"
            />
          </label>
        </div>
        <div className="my-6 flex justify-between items-center w-full flex-1">
          <label>
            Salary:
            <input
              type="text"
              name="salary"
              value={employeeData.salary}
              onChange={handleInputChange}
              placeholder="Enter Salary"
              className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-slate-100 py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
