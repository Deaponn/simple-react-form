import { Field } from "react-final-form";
import RequiredInfo from "./RequiredInfo";

function PizzaDetails({ normalizeInteger, normalizeFloat, require, slices, diameter }) {
    return (
        <div className="pizza">
            <div>
                <label>Number of slices: </label>
                <Field
                    name="no_of_slices"
                    parse={normalizeInteger}
                    validate={require}
                    render={({ input, meta }) => {
                        return (
                            <>
                                <input type="text" {...input} />
                                <RequiredInfo meta={meta} />
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
                    validate={require}
                    render={({ input, meta }) => {
                        return (
                            <>
                                <input type="text" {...input} />
                                <RequiredInfo meta={meta} />
                            </>
                        );
                    }}
                />
            </div>
            <div className="preview">
                <img src={`pizza${parseInt(slices) > 8 || ["0", "3", "5", "6", "7"].includes(slices) ? "null" : !slices ? 1 : slices}.png`} alt="slices" />
                <div>
                    <p>{diameter}</p>
                    <img src="pizzadiameter.png" alt="diameter" />
                </div>
            </div>
        </div>
    );
}

export default PizzaDetails;
