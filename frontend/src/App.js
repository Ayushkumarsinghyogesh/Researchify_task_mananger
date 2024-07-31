import React from 'react';
import Home from './pages/Home';
import AllTask from './pages/AllTask';
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompletedTask from './pages/IncompletedTask';
import Signup from './pages/Signup'; 
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-white text-purple-900 h-screen p-2 relative">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllTask />} />
            <Route path="/importantTasks" element={<ImportantTask />} />
            <Route path="/completedTasks" element={<CompletedTask />} />
            <Route path="/incompleteTasks" element={<IncompletedTask />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
