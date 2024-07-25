import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage, LearnPage, QuizPage } from "./pages";
import { PageWrapper } from "./components";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper children={<LearnPage />} title="Map Projections" />
            }
          />
          <Route
            path="/quiz"
            element={<PageWrapper children={<QuizPage />} title="Quiz" />}
          />
          <Route
            path="/about"
            element={<PageWrapper children={<AboutPage />} title="About" />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
