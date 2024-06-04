import { useEffect, useState } from "react";
import EnvVars from "../constants/EnvVars";
import { getCategories } from "../services/CategoryService";
import Category from "../types/Category";
import StringUtils from "../utils/StringUtils";

export default () => {
    const [message, setMessage] = useState<string>();
    const [category, setCategory] = useState<string>("Sports");
    const [categories, setCategories] = useState<Category[] | null>([]);

    const fetchCategories = async () => {
        setCategories(await getCategories());
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api/users/all`;
            const data = await fetch(url).then(res => res.json());;
            console.log(data);
        } catch (error) {
            console.error(error);
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
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Category</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={handleSelectChange}>
                                    {categories?.map(category => <option key={category.id} value={category.id}>{StringUtils.capitalizeFirstLetter(category.name)}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea onChange={handleMessageChange} value={message} className="textarea" placeholder="Publish message..."></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div >
        </section >
    );
}