import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function StudentItem(props) {
	const { id, name, phone, email, gender, address } = props.student;

	return (
		<tr>
			<td className="text-center">{+props.i + 1}</td>
			<td className="text-center">{id}</td>
			<td className="text-center">{name}</td>
			<td className="text-center">{gender}</td>
			<td className="text-center">{phone}</td>
			<td className="text-center">{address ? address.name : "Khong co dia chi"}</td>
			<td className="text-center">{email}</td>
			<td className="text-center">
				<OverlayTrigger overlay={<Tooltip id={id}>Detail</Tooltip>}>
					<Link type="button" className="btn btn-secondary rounded-0 me-2" to={"/students/detail_student/" + id}>
						<FaInfo />
					</Link>
				</OverlayTrigger>

				<OverlayTrigger overlay={<Tooltip id={id}>Delete</Tooltip>}>
					<button type="button" className="btn btn-secondary rounded-0" onClick={() => props.handleShowModal(props.student)}>
						<FaTrash />
					</button>
				</OverlayTrigger>
			</td>
		</tr>
	);
}

export default StudentItem;
