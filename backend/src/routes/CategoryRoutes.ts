import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import CategoryService from "@src/services/CategoryService";

// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
    const categories = await CategoryService.getAll();
    return res.status(HttpStatusCodes.OK).json({ categories });
}

export default {
    getAll
} as const;