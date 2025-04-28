import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WorkoutForm from './components/WorkoutForm';
import GoalForm from './components/GoalForm';
import WorkoutHistory from './components/WorkoutHistory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/workout">Workout Form</Link></li>
            <li><Link to="/goal">Goal Form</Link></li>
            <li><Link to="/history">Workout History</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<WorkoutForm />} />
          <Route path="/goal" element={<GoalForm />} />
          <Route path="/history" element={<WorkoutHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Component (this will show when the user lands on the homepage)
function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Fitness Tracker App!</h2>
      <p>Your personal tracker for workouts and fitness goals.</p>
    </div>
  );
}

export default App;
