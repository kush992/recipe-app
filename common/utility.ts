import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const URL = "https://api.spoonacular.com/food/ingredients/search";

export const fetchRecipe = async (query: string) => {
    const { data } = await axios.get(URL, {
        params: {
            query: query,
            apiKey: API_KEY,
        },
    });
    return data;
};

export const setSearchHistory = (query: string) => {
    let existingQuery = JSON.parse(localStorage.getItem("allItems") as string);
    if (existingQuery === null) existingQuery = [];
    const history = {
        ingredientName: query,
    };

    if (query.length > 1) {
        localStorage.setItem("history", JSON.stringify(history));
        existingQuery.unshift(history);
        localStorage.setItem("allItems", JSON.stringify(existingQuery));
    }
};
