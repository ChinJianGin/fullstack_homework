import axios from "axios";

const URL = "http://127.0.0.1:5050/api/article"

export const getArticleById = async ({ queryKey }) => {
	const [articleId] = queryKey;
	let data = await axios.get(`${URL}/id?id=${articleId}`);
	return data.data;
}

export const getArticles = async ({ queryKey }) => {
	let data = await axios.get(`${URL}/all`);
	return data;
}
