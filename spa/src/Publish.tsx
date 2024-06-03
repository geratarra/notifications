import { useState } from "react";
import EnvVars from "./constants/EnvVars";

const url = `${EnvVars.API_URL}:${EnvVars.API_PORT}/api`;

export default () => {
    const [message, setMessage] = useState<string>();
    const [category, setCategory] = useState<string>("Sports");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
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
                                    <option value="Sports">Sports</option>
                                    <option value="Finance">Fincance</option>
                                    <option value="Movies">Movies</option>
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