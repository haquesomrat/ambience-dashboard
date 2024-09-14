"use client";
import React, { useEffect, useState } from "react";
import { AddProjectForm } from "./AddProjectForm";

const AddProjectContainer = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const getAllCompanies = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/companies/api`
      );
      const data = await res.json();
      setCompanies(data);
    };
    getAllCompanies();
  }, []);

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Add Project</h2>
      </div>
      <AddProjectForm />
    </div>
  );
};

export default AddProjectContainer;
