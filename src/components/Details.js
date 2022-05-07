import { Field } from "react-final-form";
import "./Details.css";

const normalizeInteger = (value) => {
    if (!value) return value;
    if (isNaN(value.at(-1))) return value.substring(0, value.length - 1);
    return value;
};

const normalizeFloat = (value) => {
    if (!value) return value;
    if ((value.at(-1) === "." && value.substring(0, value.length - 1).includes(".")) || (value.at(-1) !== "." && isNaN(value.at(-1))))
        return value.substring(0, value.length - 1);
    return value;
};

const conditionalRequired = (isActive) => (isActive ? (value) => (value ? undefined : "Required") : () => undefined);

function Details({ which }) {
    if (which === "") return null;
    if (which === "pizza")
        return (
            <>
                <div>
                    <label>Number of slices: </label>
                    <Field
                        name="number_of_slices"
                        parse={normalizeInteger}
                        validate={conditionalRequired(which === "pizza")}
                        render={({ input, meta }) => {
                            return (
                                <>
                                    <input type="text" min="1" {...input} />{meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            );
                        }}
                    />
                </div>
                <div>
                    <label>Diameter: </label>
                    <Field
                        name="diameter"
                        parse={normalizeFloat}
                        validate={conditionalRequired(which === "pizza")}
                        render={({ input, meta }) => {
                            return (
                                <>
                                    <input type="text" {...input} />{meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            );
                        }}
                    />
                </div>
            </>
        );
    if (which === "soup")
        return (
            <div>
                <label>Spiciness scale: </label>
                <Field
                    name="spiciness_scale"
                    validate={conditionalRequired(which === "soup")}
                    render={({ input, meta }) => {
                        return (
                            <>
                                <input type="range" min="0" max="10" {...input} />{meta.error && meta.touched && <span>{meta.error}</span>}
                            </>
                        );
                    }}
                />
            </div>
        );
    if (which === "sandwich")
        return (
            <div>
                <label>Slices of bread: </label>
                <Field
                    name="slices_of_bread"
                    parse={normalizeInteger}
                    validate={conditionalRequired(which === "sandwich")}
                    render={({ input, meta }) => {
                        return (
                            <>
                                <input type="text" {...input} />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </>
                        );
                    }}
                />
            </div>
        );
}

export default Details;
