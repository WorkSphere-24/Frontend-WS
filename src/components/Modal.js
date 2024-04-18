import React, { useState } from "react";
import './Modal.css';

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
        defaultValue || {
            page: "",
            description: "",
            status: "done",
        }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.page && formState.description && formState.status) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    };

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="page">Page</label>
                        <input name="page" onChange={handleChange} value={formState.page} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            value={formState.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            name="status"
                            onChange={handleChange}
                            value={formState.status}
                        >
                            <option value="done">Done</option>
                            <option value="working on it">Working on it</option>
                            <option value="stuck">Stuck</option>
                        </select>
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};