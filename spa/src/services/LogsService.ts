import axios from "axios";
import EnvVars from "../constants/EnvVars";
import Log from "../types/Log";


const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api`;

export const getLogs = async (): Promise<Log[] | null> => {
    const response = await axios(`${url}/logs`);
    if (response.statusText !== "OK") {
        throw new Error(`Error while fetching Logs:\n
            Status code: ${response.status}
            Status text: ${response.statusText}`);
    }

    return response.data.logs;
};