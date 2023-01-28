import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleButton0 = this.handleButton0.bind(this);
        this.handleButton1 = this.handleButton1.bind(this);
        this.handleButton2 = this.handleButton2.bind(this);
        this.handleButton3 = this.handleButton3.bind(this);
        this.handleButton4 = this.handleButton4.bind(this);
        this.handleButton5 = this.handleButton5.bind(this);
        this.handleButton6 = this.handleButton6.bind(this);
        this.handleButton7 = this.handleButton7.bind(this);
        this.handleButton8 = this.handleButton8.bind(this);
        this.handleButton9 = this.handleButton9.bind(this);
        this.handleButtonAns = this.handleButtonAns.bind(this);
        this.handleButtonAnsClear = this.handleButtonAnsClear.bind(this);
        this.handleButtonAdd = this.handleButtonAdd.bind(this);
        this.handleButtonSub = this.handleButtonSub.bind(this);
        this.handleButtonMul = this.handleButtonMul.bind(this);
        this.handleButtonDiv = this.handleButtonDiv.bind(this);
        this.buttonClear = this.buttonClear.bind(this);
        this.buttonSolve = this.buttonSolve.bind(this);

        this.state = {
            afterValue1: "",
            ansValue: "",
            value1: "",
            value2: "",
            op: "",
            calcBox: ""
        }
    }

    handleButton0() {
        this.setState({calcBox: this.state.calcBox + "0"})
        this.setState({value1: this.state.value1 + "0"})
        this.setState({value2: this.state.value2 + "0"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton1() {
        this.setState({calcBox: this.state.calcBox + "1"})
        this.setState({value1: this.state.value1 + "1"})
        this.setState({value2: this.state.value2 + "1"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
        console.log(this.state)
    }

    handleButton2() {
        this.setState({calcBox: this.state.calcBox + "2"})
        this.setState({value1: this.state.value1 + "2"})
        this.setState({value2: this.state.value2 + "2"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton3() {
        this.setState({calcBox: this.state.calcBox + "3"})
        this.setState({value1: this.state.value1 + "3"})
        this.setState({value2: this.state.value2 + "3"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton4() {
        this.setState({calcBox: this.state.calcBox + "4"})
        this.setState({value1: this.state.value1 + "4"})
        this.setState({value2: this.state.value2 + "4"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton5() {
        this.setState({calcBox: this.state.calcBox + "5"})
        this.setState({value1: this.state.value1 + "5"})
        this.setState({value2: this.state.value2 + "5"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton6() {
        this.setState({calcBox: this.state.calcBox + "6"})
        this.setState({value1: this.state.value1 + "6"})
        this.setState({value2: this.state.value2 + "6"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton7() {
        this.setState({calcBox: this.state.calcBox + "7"})
        this.setState({value1: this.state.value1 + "7"})
        this.setState({value2: this.state.value2 + "7"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
        console.log(this.state)
    }

    handleButton8() {
        this.setState({calcBox: this.state.calcBox + "8"})
        this.setState({value1: this.state.value1 + "8"})
        this.setState({value2: this.state.value2 + "8"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButton9() {
        this.setState({calcBox: this.state.calcBox + "9"})
        this.setState({value1: this.state.value1 + "9"})
        this.setState({value2: this.state.value2 + "9"})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButtonAdd() {
        this.setState({calcBox: this.state.calcBox + " + "})
        this.setState({op: "add"})
        this.setState({value2: ""})
        this.setState({afterValue1: this.state.value1})
        parseInt(this.state.calcBox)
        console.log(this.state)
    }

    handleButtonSub() {
        this.setState({calcBox: this.state.calcBox + " - "})
        this.setState({op: "sub"})
        this.setState({value2: ""})
        this.setState({afterValue1: this.state.value1})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButtonMul() {
        this.setState({calcBox: this.state.calcBox + " * "})
        this.setState({op: "mul"})
        this.setState({value2: ""})
        this.setState({afterValue1: this.state.value1})
        parseInt(this.state.calcBox)
        console.log(this.state)
    }

    handleButtonDiv() {
        this.setState({calcBox: this.state.calcBox + " /"})
        this.setState({op: "div"})
        this.setState({value2: ""})
        this.setState({afterValue1: this.state.value1})
        parseInt(this.state.calcBox)
        console.log(this.state.calcBox)
    }

    handleButtonAns () {
        this.setState({calcBox: (this.state.calcBox) + (this.state.ansValue)})
    }

    handleButtonAnsClear () {
        this.setState({ansValue: ""})
    }

    buttonClear() {
        this.setState({calcBox: ""})
        this.setState({value1: ""})
        this.setState({value2: ""})
        this.setState({op: ""})
        this.setState({afterValue1: ""})
        this.setState({ansValue: this.state.calcBox})
    }

    buttonSolve() {
        if (this.state.op ==="add" && this.state.ansValue !== "") {
            this.setState({calcBox: parseInt(this.state.ansValue) + parseInt(this.state.value1)})
        }

        else if(this.state.op ==="add" && this.state.ansValue === "") {
            this.setState({calcBox: parseInt(this.state.afterValue1) + parseInt(this.state.value2)})
        }

        else if (this.state.op === "sub" && this.state.ansValue !== "") {
            this.setState({calcBox: parseInt(this.state.ansValue) - parseInt(this.state.value1)})
        }

        else if (this.state.op === "sub" && this.state.ansValue === "") {
            this.setState({calcBox: parseInt(this.state.afterValue1) - parseInt(this.state.value2)})
        }

        else if (this.state.op === "mul" && this.state.ansValue !== "") {
            this.setState({calcBox: parseInt(this.state.ansValue) * parseInt(this.state.value1)})
        }

        else if (this.state.op === "mul" && this.state.ansValue === "") {
            this.setState({calcBox: parseInt(this.state.afterValue1) * parseInt(this.state.value2)})
        }

        else if (this.state.op === "div" && this.state.ansValue !== "") {
            this.setState({calcBox: parseInt(this.state.ansValue) / parseInt(this.state.value1)})
        }

        else if (this.state.op === "div" && this.state.ansValue === "") {
            this.setState({calcBox: parseInt(this.state.afterValue1) / parseInt(this.state.value2)})
        }

        else {
            this.setState({calcBox: "Error"})
            console.log("fail")
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div>
                    <h1> Dominick's Calculator: Class Approach </h1>
                    <p> How To Use: </p>
                </div>
                <div>
                    <p>One Operator At A Time</p>
                </div>
                <div>
                    <p>"C" To Clear and Save Answer, Double "C" Restarts</p>
                </div>
                <div>
                    <p>Example: </p>
                </div>
                <div>
                    <p> - 1 + 1 = 2 </p>
                </div>
                <div>
                    <p> - "C" Previous Answer: 2 </p>
                </div>
                <div>
                    <p> - Ans * 3 = 6 </p>
                </div>
                <div>
                    <p> - "C" Previous Answer: 6 </p>
                </div>
                <div>
                    <button onClick = {this.handleButton0}>0</button>
                    <button onClick = {this.handleButton1}>1</button>
                    <button onClick = {this.handleButton2}>2</button>
                    <button onClick = {this.handleButtonAdd}>+</button>
                </div>
                <div>
                    <button onClick = {this.handleButton3}>3</button>
                    <button onClick = {this.handleButton4}>4</button>
                    <button onClick = {this.handleButton5}>5</button>
                    <button onClick = {this.handleButtonSub}>-</button>
                </div>
                <div>
                    <button onClick = {this.handleButton6}>6</button>
                    <button onClick = {this.handleButton7}>7</button>
                    <button onClick = {this.handleButton8}>8</button>
                    <button onClick = {this.handleButtonMul}>*</button>
                </div>
                <div>
                    <button onClick = {this.handleButton9}>9</button>
                    <button onClick = {this.buttonClear}>C</button>
                    <button onClick = {this.handleButtonDiv}>/</button>
                    <button onClick = {this.buttonSolve}>=</button>
                    <button onClick = {this.handleButtonAns}>Ans</button>
                </div>
                <input value={this.state.calcBox} readOnly />
                <label>Previous Answer</label>
                <input value={this.state.ansValue} readOnly />
            </div>
        )
    }
}


export default Calculator;