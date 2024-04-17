// import { useState } from "react";

const Numpad = ({ renderInput }) => {
    // define const useState

    const handelClick = (event) => {
        event.preventDefault();
        let value = event.target.value;
        renderInput(value);
    }

    return (
        <div className="operator-pad">
            <div className="positon-block">
                <div id="operator" className="delete-input">
                    <button className="button-dimension" value="delete">c</button>
                </div>
                <div id="operator" className="number-7">
                    <button className="button-dimension" value="7"
                        onClick={handelClick}>7</button>
                </div>
                <div id="operator" className="number-4">
                    <button className="button-dimension" value="4"
                        onClick={handelClick}>4</button>
                </div>
                <div id="operator" className="number-1">
                    <button className="button-dimension">1</button>
                </div>
                <div id="operator" className="change-signe">
                    <button className="button-dimension">+/-</button>
                </div>
            </div>

            <div className="positon-block">
                <div id="operator" className="parenthese">
                    <button className="button-dimension">()</button>
                </div>
                <div id="operator" className="number-8">
                    <button className="button-dimension">8</button>
                </div>
                <div id="operator" className="number-5">
                    <button className="button-dimension">5</button>
                </div>
                <div id="operator" className="number-2">
                    <button className="button-dimension">2</button>
                </div>
                <div id="operator" className="number-0">
                    <button className="button-dimension">0</button>
                </div>
            </div>

            <div className="positon-block">
                <div id="operator" className="pourcentage">
                    <button className="button-dimension">%</button>
                </div>
                <div id="operator" className="number-9">
                    <button className="button-dimension">9</button>
                </div>
                <div id="operator" className="number-6">
                    <button className="button-dimension">6</button>
                </div>
                <div id="operator" className="number-3">
                    <button className="button-dimension">3</button>
                </div>
                <div id="operator" className="virgule">
                    <button className="button-dimension">,</button>
                </div>
            </div>

            <div className="positon-block">
                <div id="operator" className="division">
                    <button className="button-dimension">/</button>
                </div>
                <div id="operator" className="multiply">
                    <button className="button-dimension">x</button>
                </div>
                <div id="operator" className="reduce">
                    <button className="button-dimension">-</button>
                </div>
                <div id="operator" className="add">
                    <button className="button-dimension">+</button>
                </div>
                <div id="operator" className="result">
                    <button className="button-dimension">=</button>
                </div>
            </div>
        </div>
    );
}

export default Numpad;