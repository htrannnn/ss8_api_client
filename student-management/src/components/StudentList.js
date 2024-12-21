import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { deleteById, getAllStudentInformation, searchByName } from "../services/informationServices";
import StudentItem from "./StudentItem";
import DeleteComponent from "./DeleteComponent";

function StudentList() {
	const [students, setStudents] = useState([]);
	const [show, setShow] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setStudents(await getAllStudentInformation());
		};
		fetchData();
	}, [show]);
	//show: tránh reload mỗi lần delete

	const searchRef = useRef();

	const handleSearch = async () => {
		const studentList = await searchByName(searchRef.current.value);
		setStudents(studentList);
	};

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
					<input type="search" className="form-control rounded-0" placeholder="Search students" ref={searchRef} />
					<button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2" onClick={handleSearch}>
						Search
					</button>
				</div>
			</div>
			<table className="table table-striped table-light">
				<thead>
					<tr>
						<th className="text-center">STT</th>
						<th className="text-center">ID</th>
						<th className="text-center">Name</th>
						<th className="text-center">Gender</th>
						<th className="text-center">Phone</th>
						<th className="text-center">Address</th>
						<th className="text-center">Email</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student, i) => (
						<StudentItem key={student.id} i={i} student={student} handleShowModal={handleShowModal} />
					))}
				</tbody>
			</table>
			<DeleteComponent show={show} student={selectedStudent} handleDelete={handleDelete} handleCloseModal={handleCloseModal} />
		</div>
	);
}

export default StudentList;
