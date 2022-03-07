// import { Form } from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Form } from "./components/Form";
import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages/Home";

function App({ auth }) {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/" element={<Login auth={auth} />}></Route> */}
        {/* <Route path="/contact" element={<Form auth={auth} />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
