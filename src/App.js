import { Route, Routes } from "react-router-dom";

import DemoPort from "./templates/demoTemplates/DemoPort";
import SkillDemo from "./components/demoComponents/SkillDemo";
import DemoFc from "./page/DemoStruc/DemoFc";
import SignUp from "./templates/SignUp/SignUp";
import LoginDemo from "./page/LoginDemos/LoginDemo";
import ProjectDemo from "./components/projectDemo/ProjectDemo";
import ContactDemo from "./components/contact/ContactDemo";
import NotFoundPage from "./page/NotFound404/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DemoPort />} path="/">
          <Route element={<DemoFc />} index />
          <Route element={<SkillDemo />} path="skill" />
          <Route element={<ProjectDemo />} path="project" />
          <Route element={<ContactDemo />} path="contact" />
        </Route>
        <Route element={<SignUp />} path="/signUp" />
        <Route element={<LoginDemo />} path="/login" />
        {/* setUp trang NotFound  */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
