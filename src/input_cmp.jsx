import React from 'react';
import Logo from './android-chrome-512x512.png'

class CapBInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputField: "",
            wordList: []
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this)
        this.clearEntries = this.clearEntries.bind(this)
        this.clearInputField = this.clearInputField.bind(this)
        this.submit = this.submit.bind(this)
    }

    handleInput(event) {
        let str = event.currentTarget.value.split("");

        for (let i = 0; i < event.currentTarget.value.length; i++) {

            if (str[i] === 'b') {
                str[i] = str[i].toUpperCase()
            }
        }

        this.setState({ inputField: str.join("") })
    }

    handleEnterKeyDown(event) {
        // const wordListCopy = this.state.wordList.slice();
        // const alphabet = new Set("abcdefghijklmnopqrstuvwxyz".split(""))

        if (event.key === "Enter") {
            // const currentWord = this.state.inputField
            // const charArray = currentWord.split("")

            // if ( currentWord.length !== 0 || charArray.every((char) => alphabet.has(char))) {
            //     wordListCopy.push(this.state.inputField);
            //     this.setState({ wordList: wordListCopy, inputField: "" })
            // } 
            this.submit(event);
        } 
    }

    clearEntries() {
        this.setState({ wordList: [] })
    }

    clearInputField() {
        this.setState({ inputField: "" })
    }

    submit(event) {
        const wordListCopy = this.state.wordList.slice();
        const alphabet = new Set("abcdefghijklmnopqrstuvwxyz".split(""))
        
        const currentWord = this.state.inputField
        const charArray = currentWord.split("")

        if (currentWord.length !== 0 || charArray.every((char) => alphabet.has(char))) {
            wordListCopy.push(this.state.inputField);
            this.setState({ wordList: wordListCopy, inputField: "" })
        }

        event.preventDefault() 
    }

    render() {

        const list = this.state.wordList.map((word, index) => (
            <li key={index} >{word}</li>
        ))

        return (
            <div className="inputWordListContainer">
                <div className="titleContainer">
                    <h1 className="title" > Capital B </h1>
                </div>
                <img className="logo" src={Logo} alt=""/>
                <input type="text"
                    className="inputBox"
                    value={this.state.inputField}
                    onChange={this.handleInput}
                    onKeyDown={this.handleEnterKeyDown}
                    placeholder="Type Here..." />
                <div className="btnContainer">
                    <button  
                        className="clearBtn btn"
                        onClick={this.clearInputField}> Clear Input </button>
                    <button
                        className="submitBtn btn"
                        onClick={this.submit}> Submit </button>
                    <button
                        className="clearBtn btn"
                        onClick={this.clearEntries}> Clear Entries </button>
                </div>
                <ul className="list">
                    {list}
                </ul>
            </div>
        )
    }
}

export default CapBInput;