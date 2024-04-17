import { useState } from "react";


const OperatorPannel = () => {
    // initiation of data
    const [screen, setScreen] = useState("")
    const [resultat, setResultat] = useState('')

    // handel data
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        setScreen(resultat * screen)

    }

    const handelClick = (event) => {
        event.preventDefault();
        let data = event.target.value;
        const newScreen = screen + data
        console.log(newScreen);
        setScreen(newScreen);
    }

    const multiply = () => {
        setResultat(screen);
    }

    const handleClean = () => {
        setResultat('');
        setScreen('');
    }

    return (
        <div className="form-control">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-input"
                        id="screen"
                        value={screen}
                        onChange={(event) => setScreen(event.target.value)}
                        required />
                </div>
                <div className="operator-pad">
                    <div className="positon-block">
                        <div id="operator" className="delete-input">
                            <button className="button-dimension"
                                onClick={handleClean}>c</button>
                        </div>
                        <div id="operator" className="number-7">
                            <button className="button-dimension" value="7"
                                onClick={(event) => handelClick(event)}>7</button>
                        </div>
                        <div id="operator" className="number-4">
                            <button className="button-dimension" value="4"
                                onClick={(event) => handelClick(event)}>4</button>
                        </div>
                        <div id="operator" className="number-1">
                            <button className="button-dimension" value="1"
                                onClick={(event) => handelClick(event)}>1</button>
                        </div>
                        <div id="operator" className="change-signe">
                            <button className="button-dimension" value="+"
                                onClick={(event) => handelClick(event)}>+/-</button>
                        </div>
                    </div>

                    <div className="positon-block">
                        <div id="operator" className="parenthese">
                            <button className="button-dimension">()</button>
                        </div>
                        <div id="operator" className="number-8">
                            <button className="button-dimension" value="8"
                                onClick={(event) => handelClick(event)}>8</button>
                        </div>
                        <div id="operator" className="number-5">
                            <button className="button-dimension" value="5"
                                onClick={(event) => handelClick(event)}>5</button>
                        </div>
                        <div id="operator" className="number-2">
                            <button className="button-dimension" value="2"
                                onClick={(event) => handelClick(event)}>2</button>
                        </div>
                        <div id="operator" className="number-0">
                            <button className="button-dimension" value="0"
                                onClick={(event) => handelClick(event)}>0</button>
                        </div>
                    </div>

                    <div className="positon-block">
                        <div id="operator" className="pourcentage">
                            <button className="button-dimension" value=""
                                onClick={(event) => handelClick(event)}>%</button>
                        </div>
                        <div id="operator" className="number-9">
                            <button className="button-dimension" value="9"
                                onClick={(event) => handelClick(event)}>9</button>
                        </div>
                        <div id="operator" className="number-6">
                            <button className="button-dimension" value="6"
                                onClick={(event) => handelClick(event)}>6</button>
                        </div>
                        <div id="operator" className="number-3">
                            <button className="button-dimension" value="3"
                                onClick={(event) => handelClick(event)}>3</button>
                        </div>
                        <div id="operator" className="virgule">
                            <button className="button-dimension" value=","
                                onClick={(event) => handelClick(event)}>,</button>
                        </div>
                    </div>

                    <div className="positon-block">
                        <div id="operator" className="division">
                            <button className="button-dimension">/</button>
                        </div>
                        <div id="operator" className="multiply">
                            <button className="button-dimension"
                                onClick={multiply}>x</button>
                        </div>
                        <div id="operator" className="reduce">
                            <button className="button-dimension">-</button>
                        </div>
                        <div id="operator" className="add">
                            <button className="button-dimension-add">+</button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn-submit">=</button>
            </form>
        </div>
    );
}

export default OperatorPannel;