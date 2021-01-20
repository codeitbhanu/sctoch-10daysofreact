import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
    // MOST OF YOUR CODE GOES HERE

    const [input, setInput] = useState({
        name: "",
        age: "",
    });

    const nameChangeHandler = (e) => {
        // console.log(e.target.value);
        setInput({
            ...input,
            name: e.target.value,
        });
    };

    const ageChangeHandler = (e) => {
        // console.log(e.target.value);
        setInput({
            ...input,
            age: e.target.value,
        });
    };

    return (
        <div className="App">
            <div>
                <h2 className="subtitle is-4">Update Data from an input</h2>
            </div>

            {/* Display Data */}
            <div className="input-display">
                <p>Display Name: {input.name}</p>
                <p>Display Age: {input.age}</p>
            </div>

            {/* Collect User Inputs */}
            <div className="inputs">
                {/* Input name */}
                <div className="field">
                    <label className="label">Name: </label>
                    <input
                        className="input"
                        type="text"
                        placeholder="William"
                        onChange={nameChangeHandler}
                    />
                </div>

                {/* Input age */}
                <div className="field">
                    <label className="label">Age: </label>
                    <input
                        className="input"
                        type="number"
                        placeholder="38"
                        onChange={ageChangeHandler}
                    />
                </div>
            </div>
            <ScotchInfoBar seriesNumber="3" />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
