import React, { useEffect, useState } from "react";
import { getStudentById } from "../services/informationServices";
import { useParams } from "react-router-dom";

function DetailComponent() {
	const [studentDetail, setStudentDetail] = useState({ id: "", name: "", phone: "", email: "" });

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			setStudentDetail(await getStudentById(id));
		};
		fetchData();
	}, [id]);

	return (
		<div className="container">
			<h3>Student Details</h3>
			<p>ID: {studentDetail.id}</p>
			<p>Name: {studentDetail.name}</p>
			<p>Phone: {studentDetail.phone}</p>
			<p>Email: {studentDetail.email}</p>
		</div>
	);
}

export default DetailComponent;
