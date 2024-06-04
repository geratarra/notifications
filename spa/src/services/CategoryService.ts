import EnvVars from "../constants/EnvVars";
import Category from "../types/Category";


const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api`;

export const getCategories = async (): Promise<Category[] | null> => {
    try {
        const response = await fetch(`${url}/categories/all`);
        if (!response.ok) {
            throw new Error(`Error while fetching Categories:\n
            Status code: ${response.status}
            Status text: ${response.statusText}`);
        }

        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error(error);
        return null;
    }
};