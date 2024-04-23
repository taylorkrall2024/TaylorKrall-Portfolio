import { ContentCard } from "./components/card";
import { Hero } from "./components/hero";
import {Navigation} from "./components/navBar"
import { ExerciseApp } from "./components/projects/ExerciseApp";
import { MenuApp } from "./components/projects/menuApp";
import { QuizApp } from "./components/projects/quizApp";
import { TodoApp } from "./components/projects/ToDoApp";
function App() {
  return (
<>
  <Navigation></Navigation>
  <main class="w-full flex">
    <Hero></Hero> 
  </main>
  <div class="w-full">
  <ExerciseApp></ExerciseApp>
    <MenuApp></MenuApp>
    <QuizApp></QuizApp>
    <TodoApp></TodoApp>
  </div>
</>
  );
}

export default App;
