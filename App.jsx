import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';
import WorkoutForm from './components/WorkoutForm';
import GoalForm from './components/GoalForm';
import WorkoutHistory from './components/WorkoutHistory';
import WorkoutIdeas from './components/WorkoutIdeas'; // 
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (workout) => {
    setWorkouts(prev => [...prev, workout]);
  };

  return (
    <Router>
      <div className="app-container">
        {/* NavBar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/workout">Workout Form</Link></li>
            <li><Link to="/goal">Goals</Link></li>
            <li><Link to="/history">Workout History</Link></li>
            <li><Link to="/ideas">Workout Ideas</Link></li> 
          </ul>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<WorkoutForm onAddWorkout={handleAddWorkout} />} />
          <Route path="/goal" element={<GoalForm />} />
          <Route path="/history" element={<WorkoutHistory workouts={workouts} />} />
          <Route path="/ideas" element={<WorkoutIdeas />} /> 
        </Routes>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Fitness Tracker App! 💖</h2>
      <p>Track your progress, set your goals, and have fun! 🌸</p>

      <div className="suggestions">
        <h3>💪 Cute Workout Ideas:</h3>
        <ul>
          <li>✨ 15-minute Morning Stretch</li>
          <li>✨ Dance Cardio Session</li>
          <li>✨ Full Body HIIT</li>
          <li>✨ Core and Abs Strengthening</li>
          <li>✨ Evening Relaxation Yoga</li>
          <li>
            <Link to="/ideas" style={{ color: '#FF69B4', fontWeight: 'bold' }}>
              ✨ Click me for more ideas →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default App;
