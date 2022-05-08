import MyForm from "./components/MyForm";
import Overlay from "./components/Overlay";
import { useState, useEffect } from "react";
import "./App.css";

const fillPrepTime = (value) => {
    if (value.length === 8) return value;
    if (value.length % 3 === 0) return fillPrepTime(value + "00");
    if (value.length % 3 === 1) return fillPrepTime(value + "0:");
    if (value.length % 3 === 2) return fillPrepTime(value + ":00");
};

function App() {
    const [returnedData, setReturnedData] = useState({ __myUniqueHide: true });
    useEffect(() => {
        document.title = "Simple form";
    }, []);

    const sendRequest = async (values) => {
        const URL = "https://frosty-wood-6558.getsandbox.com/dishes";
        values.preparation_time = fillPrepTime(values.preparation_time);
        if (values.no_of_slices) values.no_of_slices = parseInt(values.no_of_slices);
        if (values.diameter) values.diameter = parseFloat(values.diameter);
        if (values.spiciness_scale) values.spiciness_scale = parseInt(values.spiciness_scale);
        if (values.slices_of_bread) values.slices_of_bread = parseInt(values.slices_of_bread);
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const responseData = await response.json();
        setReturnedData(responseData);
    };

    return (
        <>
            <MyForm handleSubmit={sendRequest} />
            {!returnedData.__myUniqueHide && (
                <Overlay
                    data={returnedData}
                    reset={() => {
                        setReturnedData({ __myUniqueHide: true });
                    }}
                />
            )}
        </>
    );
}

export default App;
