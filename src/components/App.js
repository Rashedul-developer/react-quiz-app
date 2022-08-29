import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../assets/styles/App.css";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { AuthProvider } from "../Providers/AuthProvider";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<AuthMiddleware />}>
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Results />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
