import React from "react";
import users from "./users-data";
import ScotchInfobar from "./ScotchInfoBar";
import Card from "./Card";

function App() {
    return (
        <div className="App">
            <div className="page-deets">
                <h2>Iterate over Array and display data</h2>
            </div>

            {/* Iterate over imported array in userData */}
            <div className="users">
                {users.map((user, index) => (
                    <Card index={index} {...user} />
                ))}
            </div>
            <ScotchInfobar />
        </div>
    );
}

export default App;
