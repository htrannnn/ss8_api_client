import axios from "axios";
import { BASE_URL } from "./api";

export async function getAllAddress() {
	try {
		const response = await axios.get(`${BASE_URL}/addresses`);
		return response.data;
	} catch (error) {}
}
