import React from "react";
import "./App.scss";
import { TextField } from "./components/TextField";
import { ReducerExample } from "./reducers/ReducerExample";
import { Counter } from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="app">
      {/* <TextField text='hello' person={{ firstName: '', lastName: '' }} handleChange={ e => {
                console.log(e.eventPhase);
            }}/>
            <ReducerExample/> */}
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
