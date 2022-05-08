import { Field } from "react-final-form";
import Emoji from "./Emoji";
import RequiredInfo from "./RequiredInfo";

function SoupDetails({ require, spiciness }) {
    return (
        <>
            <div className="soup">
                <label>Spiciness scale: </label>
                <Field
                    name="spiciness_scale"
                    validate={require}
                    initialValue={"3"}
                    render={({ input, meta }) => {
                        return (
                            <div>
                                <div>
                                    <input type="range" min="0" max="10" {...input} />
                                    <RequiredInfo meta={meta} />
                                </div>
                            </div>
                        );
                    }}
                />
            </div>
            <span>
                <Emoji spiciness={spiciness} spicy />
            </span>
        </>
    );
}

export default SoupDetails;
