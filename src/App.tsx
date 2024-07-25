import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage, LearnPage, QuizPage } from "./pages";
import { Footer, Header } from "./components";
import PageWrapper from "./components/pageWrapper/pageWrapper";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LearnPage />} />
          <Route
            path="/quiz"
            element={<PageWrapper children={<QuizPage />} title="Quiz" />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
