import React, {useEffect, useState} from "react";
import "./App.scss";
import {Counter} from "./components/Counter";
import axios from 'axios';

const App: React.FC = () => {
    const [state, setState] = useState({});
    // method 1
    useEffect(() => {
       fetch('https://api.adviceslip.com/advice')
           .then(response => response.json())
           .then(result => console.log(result));
    });

    // method 2 - this one's better
    axios.get('https://api.adviceslip.com/advice')
        .then(reponse => console.log(reponse.data));

    return (
        <div className="app">
            <Counter>
                {({count, setCount}) => (
                    <div>
                        {count}
                        <button onClick={() => setCount(count+1)}>+</button>{" "}
                    </div>
                )}
            </Counter>
        </div>
    );
};

export default App;
