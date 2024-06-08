import { INotification } from "@src/models/INotification";
import orm from './MockOrm';


async function log(notifications: INotification[]) {
    const db = await orm.openDb();
    db.logs = db.logs.concat(notifications);
    return orm.saveDb(db);
}

async function getAll() {
    const db = await orm.openDb();
    return db.logs;
}

export default {
    log,
    getAll
} as const;