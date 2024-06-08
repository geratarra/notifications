
import LogRepo from "../repos/LogRepo";
import { INotification } from "@src/models/INotification";


// **** Functions **** //

/**
 * Get all categories.
 */
function getAll(): Promise<INotification[]> {
    return LogRepo.getAll();
}

export default {
    getAll
} as const;