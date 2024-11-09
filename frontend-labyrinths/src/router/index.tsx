import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "../pages/home";
import NavBar from "../components/navBar";
import ErrorPage from "../pages/errorPage";
import TemplatePage from "../pages/viteTemplate";

export function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<TemplatePage />} />
        <Route path="/template" element={<TemplatePage />} />
      </Routes>
    </Router>
  );
}
