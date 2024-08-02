import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage, MainPage, QuizPage, LearnPage } from "./pages";
import { PageWrapper } from "./components";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper
                children={<MainPage />}
                title="Map Projections"
                main
              />
            }
          />
          <Route
            path="/learn"
            element={<PageWrapper children={<LearnPage />} title="Learn" />}
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
