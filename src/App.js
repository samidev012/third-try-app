import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import AnimatedBackground from "./AnimatedBackground";

import AdminMessages from "./pages/AdminMessages";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <BrowserRouter>

      <AnimatedBackground />

      <Header />

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />


        {/* PROTECTED WEBSITE PAGES */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminMessages />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;