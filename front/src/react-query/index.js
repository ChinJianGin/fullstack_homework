import { useQuery } from "react-query";
import { getArticleById, getArticles } from "../api";


export const useArticles = (url) => {
	const { data, isLoading } = useQuery([url], getArticles)
	return { data, isLoading };
}

export const useArticleById = (articleId) => {
	const { data, isLoading } = useQuery([articleId], getArticleById)
	return { data, isLoading } ;
}
