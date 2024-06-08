import { useEffect, useState } from "react";
import { getLogs } from "../services/LogsService";
import Log from "../types/Log";
import StringUtils from "../utils/StringUtils";

export default () => {
    const [logs, setLogs] = useState<Log[] | null>([]);
    const [loadingLogs, setLoadingLogs] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchLogs = async () => {
        setLoadingLogs(true);
        try {
            const logsResponse = await getLogs();
            setLogs(await getLogs());
            setError(false);
        } catch (error) {
            setError(true);
            setLogs(null);
        } finally {
            setLoadingLogs(false);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <section className="py-5">
            <div className="container">
                {loadingLogs && <progress className="block progress is-small is-primary" max="100"></progress>}
                {error && <div className="notification is-danger">
                    Error while fetching logs. Please try again.
                </div>}
                {logs && logs.map(log => {
                    return (
                        <table className="table is-hoverable is-fullwidth is-striped">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Channel</th>
                                    <th>Date</th>
                                    <th>Message</th>
                                    <th>User</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs && logs.map(log => {
                                    return (
                                        <tr key={log.id}>
                                            <th>{StringUtils.capitalizeFirstLetter(log.category)}</th>
                                            <th>{log.channel}</th>
                                            <th>{new Date(log.date).toISOString()}</th>
                                            <th>{log.message}</th>
                                            <th>{log.user}</th>
                                            <th className={log.sent ? "is-link" : "is-danger"}>{log.sent ? "Succeeded" : "Failled"}</th>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    );
                })}
            </div>
        </section>
    );
}