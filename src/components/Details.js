import SoupDetails from "./SoupDetails";
import PizzaDetails from "./PizzaDetails";
import SandwichDetails from "./SandwichDetails";
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

function Details({ which, formValues }) {
    if (which === "") return null;
    if (which === "pizza")
        return <PizzaDetails slices={formValues ? formValues.no_of_slices : 0} diameter={formValues ? formValues.diameter : 0} normalizeInteger={normalizeInteger} normalizeFloat={normalizeFloat} require={conditionalRequired(which === "pizza")} />;
    if (which === "soup") return <SoupDetails spiciness={formValues ? formValues.spiciness_scale : 0} require={conditionalRequired(which === "soup")} />;
    if (which === "sandwich")
        return <SandwichDetails slices={formValues ? formValues.slices_of_bread : 0} normalizeInteger={normalizeInteger} require={conditionalRequired(which === "sandwich")} />;
}

export default Details;
