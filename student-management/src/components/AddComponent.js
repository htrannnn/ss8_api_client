import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addNewStudent } from "../services/informationServices";
import { getAllAddress } from "../services/addressService";

function AddComponent() {
	const [student, setStudent] = useState({
		id: "",
		name: "",
		gender: "",
		phone: "",
		email: "",
		address: "",
	});

	const [address, setAddress] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			setAddress(await getAllAddress());
		};
		fetchData();
	}, []);

	const navigate = useNavigate();

	const handleSubmit = async (value) => {
		const student = {
			...value,
			address: JSON.parse(value.address),
			//JSON.parse: chuyển từ chuỗi sang đối tượng
		};

		await addNewStudent(student);
		navigate("/students");
	};

	const handleValidate = Yup.object({
		id: Yup.string().required("Yêu cầu không được để trống").min(1, "Hãy điền id hợp lệ!"),

		name: Yup.string()
			.required("Tên không được để trống")
			.matches(/^[A-ZÀ-Ỹ[a-zà-ỹ]*(\s[A-ZÀ-Ỹ[a-zà-ỹ]*)+$/, "Tên không đúng định dạng"),

		phone: Yup.string()
			.required("Số điện thoại không được để trống")
			.min(0, "Phải là số nguyên dương")
			.matches(/^0[0-9]{9}$/, "Số điện thoại không hợp lệ"),

		email: Yup.string()
			.required("Email không được để trống")
			.min(1, "Phải là số nguyên dương")
			.matches(/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không hợp lệ"),
		//{2,}: Phần mở rộng phải đảm bảo có 2 kí tự
	});

	return (
		<div className="container">
			<h3>Add New Student</h3>
			<Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
				<Form className="mt-3">
					<div className="row  mb-3 ms-1 align-items-center">
						<label className="col-sm-1">ID:</label>
						<div className="col-sm-4">
							<Field type="text" name="id" className="form-control" placeholder="Enter your id" />
							<ErrorMessage name="id" style={{ color: "red" }} component="div" />
						</div>
					</div>

					<div className="row  mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Name:</label>
						<div className="col-sm-4">
							<Field type="text" name="name" className="form-control" placeholder="Enter your name" />
							<ErrorMessage name="name" style={{ color: "red" }} component="div" />
						</div>
					</div>

					<div className="row  mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Gender:</label>
						<div className="col-sm-4">
							<div>
								<div className="form-check form-check-inline">
									<Field className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="female" />
									<label className="form-check-label" htmlFor="inlineRadio1">
										Female
									</label>
								</div>
								<div className="form-check form-check-inline">
									<Field className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="male" />
									<label className="form-check-label" htmlFor="inlineRadio2">
										Male
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="row mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Phone:</label>
						<div className="col-sm-4">
							<Field type="text" name="phone" className="form-control" placeholder="Enter your phone" />
							<ErrorMessage name="phone" style={{ color: "red" }} component="div" />
						</div>
					</div>

					<div className="row mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Address:</label>
						<div className="col-sm-4">
							<Field as="select" name="address" className="form-select">
								<option value="">City</option>
								{address.map((a) => (
									<option value={JSON.stringify(a)}>{a.name}</option>
								))}
							</Field>
						</div>
					</div>

					<div className="row mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Email:</label>
						<div className="col-sm-4">
							<Field type="email" name="email" className="form-control" placeholder="Enter your email" />
							<ErrorMessage name="email" style={{ color: "red" }} component="div" />
						</div>
					</div>

					<button type="submit" className="btn btn-secondary btn-sm mb-3 ms-2">
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	);
}

export default AddComponent;
