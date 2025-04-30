function WorkoutHistory() {
    // TODO: fetch workouts from backend
    const workouts = []; // static for now
  
    return (
      <div>
        <h2>Workout History</h2>
        {workouts.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          <ul>
            {workouts.map((workout, index) => (
              <li key={index}>
                {workout.type} - {workout.duration} min - {workout.caloriesBurned} calories
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default WorkoutHistory;
  