import React from "react";
import "./App.scss"
import Button from "./components/Button/Button";

export default () => (
  <>
    <div className="header">
        <Button title="➕ 1" size="big"></Button>
        <Button title="➕ 5" size="big"></Button>
        <Button title="➕ 10" size="big"></Button>
    </div>
    <div className="header">
        <Button title="▶️" size="big"></Button>
        <Button title="⏹️" size="big"></Button>
        <Button title="🗑️" size="big"></Button>
    </div>
  </>
);
