import { Form } from "react-final-form";
import "./App.css";

const sendRequest = () => {
    console.log("reaquest sent");
};

function App() {
    return <Form onSubmit={sendRequest} render={() => <div>successful test</div>} />;
}

export default App;
