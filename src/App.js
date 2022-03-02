// import { Form } from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Form } from "./components/Form";

function App({ auth }) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login auth={auth} />}></Route>
        <Route path="/contact" element={<Form auth={auth} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
