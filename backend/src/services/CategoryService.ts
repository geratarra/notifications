import { ICategory } from "../models/ICategory";
import CategoryRepo from "../repos/CategoryRepo";


// **** Functions **** //

/**
 * Get all categories.
 */
function getAll(): Promise<ICategory[]> {
    return CategoryRepo.getAll();
}

export default {
    getAll
} as const;