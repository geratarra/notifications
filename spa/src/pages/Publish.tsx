import { useEffect, useState } from "react";
import EnvVars from "../constants/EnvVars";
import { getCategories } from "../services/CategoryService";
import Category from "../types/Category";
import StringUtils from "../utils/StringUtils";
import axios from "axios";

export default () => {
    const [message, setMessage] = useState<string>();
    const [category, setCategory] = useState<string>("Select category");
    const [categories, setCategories] = useState<Category[] | null>([]);
    const [loadingPublishing, setLoadingPublishing] = useState<boolean>(false);
    const [notificationResponse, setNotificationResponse] = useState<{success: boolean, message: string} | null>(null);

    const fetchCategories = async () => {
        setCategories(await getCategories());
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const form = event.currentTarget;
            setLoadingPublishing(true);
            const formData = new FormData(form);
            const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api/publish`;
            const data = await axios({
                method: "post",
                url: url,
                data: { message: Object.fromEntries(formData) }
            })
                .then(res => setNotificationResponse(res.data))
                .catch(error => {
                    setNotificationResponse({ success: false, message: error })
                })
                .finally(() => { setLoadingPublishing(false) });

        } catch (error) {
            console.error(error);
            setLoadingPublishing(false);
            setNotificationResponse({ success: false, message: error as string });
        }
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setCategory(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        setMessage(event.target.value);
    };

    return (
        <section className="py-5">
            <div className="container">
                <form onSubmit={handleSubmit} method="post" className="block">
                    <div className="field">
                        <label className="label" htmlFor="select-category">Category</label>
                        <div className="control">
                            <div className="select">
                                <select required onChange={handleSelectChange} name="category" id="select-category" value={category}>
                                    {categories?.map(category => <option key={category.id} value={category.name}>{StringUtils.capitalizeFirstLetter(category.name)}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea name="message" required onChange={handleMessageChange} value={message} className="textarea" placeholder="Publish message..."></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
                {loadingPublishing && <progress className="block progress is-small is-primary" max="100"></progress>}
                {notificationResponse && <div className={`notification ${notificationResponse.success ? "is-link" : "is-danger"}`}>
                    <button className="delete" onClick={() => setNotificationResponse(null)}></button>
                    {notificationResponse.message}
                </div>}
            </div>
        </section>
    );
}