import React, { useState } from "react";

function StateTutorial() {
    const [counter, useCounter] = useState(0);
    const Increment = () => {
        useCounter(counter + 1);
    };

    return(
        <div className="hook">
            {counter}
            <button className="hook" onClick={Increment}>Increment</button>
        </div>
    );
}

export default StateTutorial;