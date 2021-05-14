import { InputSubject, TextAreaObserver } from "./observerPattern.js";

const input = document.querySelector("#input1")

const caja1 = document.querySelector(".caja-1")
const caja2 = document.querySelector(".caja-2")
const caja3 = document.querySelector(".caja-3")

const inputSubject = new InputSubject(input)

const textAreaObserver1 = new TextAreaObserver(caja1)
const textAreaObserver2 = new TextAreaObserver(caja2)
const textAreaObserver3 = new TextAreaObserver(caja3)

inputSubject.subscribe(textAreaObserver1)
inputSubject.subscribe(textAreaObserver2)
inputSubject.subscribe(textAreaObserver3)

export {
    inputSubject
}