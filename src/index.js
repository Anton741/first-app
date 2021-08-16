import React from "react"
import ReactDom from "react-dom"

const element = <h1>Hello world, my name is Anton Goncharov.</h1>
console.log(element);
ReactDom.render(element, document.getElementById('root'))