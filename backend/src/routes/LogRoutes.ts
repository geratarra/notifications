import LogRepo from "@src/repos/LogRepo";
import { IRes } from "./types/express/misc";
import { IReq } from "./types/types";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

async function getAll(_: IReq, res: IRes) {
    const logs = await LogRepo.getAll();
    return res.status(HttpStatusCodes.OK).json({ logs });
}


export default {
    getAll
}