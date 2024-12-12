import axios from "axios";

export async function getAllStudentInformation() {
	try {
		const response = await axios.get("http://localhost:0612/information");
		return response.data;
	} catch (error) {
		return [];
	}
}
