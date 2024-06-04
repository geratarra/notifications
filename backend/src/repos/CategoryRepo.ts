import { ICategory } from "../models/Category";
import orm from './MockOrm';

/**
 * Get all categories.
 */
async function getAll(): Promise<ICategory[]> {
    const db = await orm.openDb();
    return db.categories;
}

export default {
    getAll
} as const;