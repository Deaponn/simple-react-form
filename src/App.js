import MyForm from './components/MyForm' 
import "./App.css";

const sendRequest = () => {
    console.log("request sent");
};

function App() {
    return <MyForm handleSubmit={sendRequest} />;
}

export default App;
