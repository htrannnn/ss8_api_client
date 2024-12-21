import { Routes, Route } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import StudentList from "./components/StudentList";
import AddComponent from "./components/AddComponent";
import { ToastContainer } from "react-toastify";
import DetailComponent from "./components/DetailComponent";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path={"/students"} element={<StudentList />}></Route>
				<Route path={"/students/add_student"} element={<AddComponent />}></Route>
				<Route path={"/students/detail_student/:id"} element={<DetailComponent />}></Route>
			</Routes>
			<FooterComponent />
			<ToastContainer />
		</>
	);
}

export default App;
