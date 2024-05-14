import { Route, Routes } from "react-router-dom";
import DemoPort from "./templates/demoTemplates/DemoPort";
import SkillDemo from "./components/demoComponents/SkillDemo";
import DemoFc from "./page/DemoStruc/DemoFc";


function App() {
  return (
    // <div className="App">
    //   <Header />
    // </div>
    <>
      <Routes>
        {/* khi đi vào trang chủ sẽ hiện thị component DemoFuntion */}
        {/* <Route element={<Header />} path="/home" /> */}
        {/* <Route element={<Header />} path="/">
          <Route element={<DemoFc />} path="/demo" />
        </Route> */}
        <Route element={<DemoPort />} path="/">
          {/* //Khi người dùng vừa truy cập vào đúng path của Route cha, sẽ tự động hiện thị cpmonent có thuộc tính index lên luôn  */}
          <Route element={<DemoFc />} index />
          <Route element={<SkillDemo />} path="skill" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
