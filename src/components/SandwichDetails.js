import { Field } from "react-final-form";
import Emoji from "./Emoji";
import RequiredInfo from "./RequiredInfo";

function SandwichDetails({ normalizeInteger, require, slices }) {
    return (
        <>
            <div>
                <label>Slices of bread: </label>
                <Field
                    name="slices_of_bread"
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
            <span>
                <Emoji slices={slices} slicy />
            </span>
        </>
    );
}

export default SandwichDetails;
