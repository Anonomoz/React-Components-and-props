import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

function App() {
    return(
        <div id="root">
            <Price currency="$" value={5} showDecimals={true} />
        </div>
    )
}

function Price(props) {
    const formattedValue = props.showDecimals ? props.value.toFixed(2) : props.value;
    return (
        <p>The price is {props.currency + formattedValue}</p>
    )
}

createRoot(document.querySelector("#root")).render(<StrictMode><App /></StrictMode>);
