import React from "react";
import ScotchInfoBar from "./ScotchInfoBar";
import user from "./assets/data";
import UserInfo from "./UserInfo";

function App() {
    return (
        <div className="App">
            {/* Show user data here */}
            <div className="user-deets">
                <UserInfo user={user} />
            </div>

            <ScotchInfoBar />
        </div>
    );
}

export default App;
