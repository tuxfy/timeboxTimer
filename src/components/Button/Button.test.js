import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

// { title, size, value, clickEvent }

it("renders different button sizes", () => {
    const clickEvent = () => { return; };
    let params = { key:"bigButton", title: "buzz", size: "big", value: "feed", clickEvent: clickEvent };
    let bigButton = <Button {...params} />;
    act(() => {
        render(bigButton, container);
    });
    expect(container.firstChild.value).toBe(params.value);
    expect(container.firstChild.className).toBe(params.size);
    expect(container.firstChild.textContent).toBe(params.title);
});