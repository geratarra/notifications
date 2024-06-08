import EnvVars from "../constants/EnvVars";
import Log from "../types/Log";


const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api`;

export const getLogs = async (): Promise<Log[] | null> => {
    try {
        const response = await fetch(`${url}/logs`);
        if (!response.ok) {
            throw new Error(`Error while fetching Categories:\n
            Status code: ${response.status}
            Status text: ${response.statusText}`);
        }

        const data = await response.json();
        return data.logs;
    } catch (error) {
        console.error(error);
        return null;
    }
};