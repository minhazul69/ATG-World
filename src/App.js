import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllPost from "./Components/Page/AllPost/AllPost";
import Header from "./Components/Page/Header/Header";
import Navbar from "./Components/Page/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AllPost />
    </div>
  );
}

export default App;
