import "./App.css";
import { Fragment } from "react";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <InputTodo />
            <ListTodos />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
