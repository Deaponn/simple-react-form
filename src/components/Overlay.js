import "./Overlay.css";

function Overlay({ data, reset }) {
    return (
        <div className="overlay" onClick={reset}>
            <pre>
                {JSON.stringify(data, null, 4)}
            </pre>
            Click anywhere to close
        </div>
    );
}

export default Overlay;
