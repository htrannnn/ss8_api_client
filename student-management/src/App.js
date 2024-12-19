import { Routes, Route } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import StudentList from "./components/StudentList";
import AddComponent from "./components/AddComponent";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path={"/students"} element={<StudentList />}></Route>
				<Route path={"/students/add_students"} element={<AddComponent />}></Route>
			</Routes>
			<FooterComponent />
			<ToastContainer />
		</>
	);
}

export default App;
