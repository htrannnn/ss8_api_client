import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteById, getAllStudentInformation } from "../services/informationServices";
import StudentItem from "./StudentItem";
import DeleteComponent from "./DeleteComponent";

function StudentList() {
	const [studentList, setStudentList] = useState([]);
	const [show, setShow] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setStudentList(await getAllStudentInformation());
		};
		fetchData();
	}, [show]);
	//show: tránh reload mỗi lần delete

	const handleShowModal = (student) => {
		setShow(true);
		setSelectedStudent(student);
	};

	const handleCloseModal = (student) => {
		setShow(false);
		setSelectedStudent({});
	};

	const handleDelete = async () => {
		try {
			await deleteById(selectedStudent.id);
			handleCloseModal();
		} catch (error) {}
	};

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
						<th>Gender</th>
						<th>Phone</th>
						<th>Address</th>
						<th>Email</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((student, i) => (
						<StudentItem key={student.id} i={i} student={student} handleShowModal={handleShowModal} />
					))}
				</tbody>
			</table>
			<DeleteComponent show={show} student={selectedStudent} handleDelete={handleDelete} handleCloseModal={handleCloseModal} />
		</div>
	);
}

export default StudentList;
