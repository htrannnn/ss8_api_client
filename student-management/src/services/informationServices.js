import axios from "axios";
import { BASE_URL } from "./api";

export async function getAllStudentInformation() {
	try {
		const response = await axios.get(`${BASE_URL}/information`);
		return response.data;
	} catch (error) {}
}

export async function addNewStudent(student) {
	try {
		const response = await axios.post(`${BASE_URL}/information`, student);
		return response.data;
	} catch (error) {}
}

export async function deleteById(id) {
	try {
		const response = await axios.delete(`${BASE_URL}/information/${id}`);
		return response.data;
	} catch (error) {}
}
