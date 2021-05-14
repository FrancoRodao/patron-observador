import { inputSubject } from "./inputObserver.js";

const counterMessage = () => {
    const counterDiv = document.querySelector(".counter")
    let counter = 11
    const counterInterval = setInterval(() => {
        counter--
        counterDiv.innerHTML = `<h1>En ${counter} segundos las cajas se sincronizaran a la entrada 2</h1>`
    }, 1000);

    const input2 = document.querySelector("#input2")

    setTimeout(() => {
        inputSubject.setModel(input2)
        clearInterval(counterInterval)
        counterDiv.innerHTML = ""
    }, counter * 1000);
}

export {
    counterMessage
}