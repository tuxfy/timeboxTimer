import React from "react";
import "./App.scss"
import Button from "./components/Button/Button";
import { newUUID } from "./utils/UUID";

export default () => (
  <>
    <header>    
        {[1,5,10].map((value) => {
            return <Button key={newUUID()} title={"➕"+value+"min"} size="big"></Button>
        })}
        {["▶️","⏹️","🗑️"].map((value) => {
            return <Button key={newUUID()} title={value} size="big"></Button>
        })}
    </header>
    <main>
        sdskjdhsjhdsjkhd
    </main>
    <footer>
		<p>Copyright 2009 Your name</p>
	</footer>
  </>
);
