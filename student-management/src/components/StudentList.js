import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStudentInformation } from "../services/informationServices";
import StudentItem from "./StudentItem";

function StudentList() {
	const [studentList, setStudentList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setStudentList(await getAllStudentInformation());
		};
		fetchData();
	}, []);

	return (
		<div className="container my-3">
			<div className="item-group">
				<Link className="btn btn-secondary rounded-0 w-25" id="add-link" to="/students/add_students">
					Add Student
				</Link>

				<div className="input-group ms-5 w-25" id="search">
					<input type="text" className="form-control rounded-0" placeholder="Search students" />
					<button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2">
						Search
					</button>
				</div>
			</div>
			<table className="table table-striped table-light">
				<thead>
					<tr>
						<th>STT</th>
						<th>ID</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((student, i) => (
						<StudentItem key={student.id} i={i} student={student} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StudentList;
