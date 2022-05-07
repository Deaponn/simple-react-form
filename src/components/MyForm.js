import { Form, Field } from "react-final-form";
import Details from "./Details";
import "./MyForm.css";

const normalizePrepTime = (value) => {
    if (!value) return value;
    if ((value.length < 3 && isNaN(value.at(-1))) || value.length === 9) return value.substring(0, value.length - 1);
    if (value.length > 2) {
        if (
            (value.at(-2) === ":" && !isNaN(value.at(-3)) && !isNaN(value.at(-1))) ||
            (value.at(-1) === ":" && !isNaN(value.at(-2)) && !isNaN(value.at(-3))) ||
            (value.at(-3) === ":" && !isNaN(value.at(-2)) && !isNaN(value.at(-1)))
        )
            return value;
        if (!isNaN(value.at(-1)) && !isNaN(value.at(-2)) && !isNaN(value.at(-3))) return value.substring(0, value.length - 1) + ":" + value.at(-1);
        return value.substring(0, value.length - 1);
    }
    return value;
};

const required = (value) => (value ? undefined : "Required");

function MyForm({ handleSubmit }) {
    return (
        <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Dish name: </label>
                        <Field
                            name="name"
                            validate={required}
                            render={({ input, meta }) => (
                                <>
                                    <input type="text" placeholder="dish name" {...input} />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <label>Preparation time: </label>
                        <Field
                            name="preparation_time"
                            validate={required}
                            parse={normalizePrepTime}
                            render={({ input, meta }) => (
                                <>
                                    <input type="text" placeholder="00:00:00" {...input} />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        />
                    </div>
                    <div>
                        <label>Type: </label>
                        <Field
                            name="type"
                            validate={required}
                            render={({ input, meta }) => {
                                return (
                                    <>
                                        <select onChange={input.onChange} value={input.value}>
                                            <option />
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="sandwich">Sandwich</option>
                                        </select>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </>
                                );
                            }}
                        ></Field>
                    </div>
                    <Details which={values.type ? values.type : ""} />
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                    <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                        Reset
                    </button>
                </form>
            )}
        />
    );
}

export default MyForm;
