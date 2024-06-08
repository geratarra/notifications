import axios from "axios";
import EnvVars from "../constants/EnvVars";
import Category from "../types/Category";


const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api`;

export const getCategories = async (): Promise<Category[] | null> => {
    try {
        const response = await axios(`${url}/categories`);
        if (response.statusText !== "OK") {
            throw new Error(`Error while fetching Categories:\n
            Status code: ${response.status}
            Status text: ${response.statusText}`);
        }

        return response.data.categories;
    } catch (error) {
        console.error(error);
        return null;
    }
};