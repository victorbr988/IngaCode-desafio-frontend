import { Routes, Route } from "react-router-dom";
import { DashBoard } from "../pages/Dashboard";
import { Home } from '../pages/Home';
import { Projects } from "../pages/Projects";
import { Tasks } from '../pages/Tasks';

export function Pagination() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
