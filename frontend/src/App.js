import React from 'react'
import Home from './pages/Home'
import AllTask from './pages/AllTask';
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompletedTask from './pages/IncompletedTask';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import signup from './pages/signup';

const App = () => {
  return (
      <div className="bg-gray-900 text-white h-screen p-2 relative ">
        <Router>
          <Routes>
            <Route exact path = '/' element={<Home/>} >
              <Route index element={<AllTask/>} />
              <Route path = '/importantTasks' element={<ImportantTask/>} />
              <Route path = '/completedTasks' element={<CompletedTask/>} />
              <Route path = '/incompleteTasks' element={<IncompletedTask/>} />
            </Route >
            <Route  path = "/signup" element = {signup}></Route>
          </Routes>        
        </Router>
      </div>
  )
}

export default App
