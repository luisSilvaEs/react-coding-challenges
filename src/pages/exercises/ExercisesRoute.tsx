import { Routes, Route } from "react-router-dom";
import Form from "../../components/challenges/form/Form";
/*
interface Challenge {
  id: string;
  name: string;
  description: string;
  component?: string;
}

interface ExercisesRouteProps {
  exercisesPages?: Challenge[];
}
*/

const ExercisesRoute = () => {
  return (
    <>
      <h1>Exercises</h1>
      <Routes>
        <Route path="/urf1" element={<Form />} />
      </Routes>
    </>
  );
};

export default ExercisesRoute;
