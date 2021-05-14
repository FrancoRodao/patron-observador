import { counterMessage } from "./counterMessage.js";
import { inputSubject } from "./inputObserver.js";

const changeEntryTo1 = document.getElementById("changeToEntry1")
const changeEntryTo2 = document.getElementById("changeToEntry2")

changeEntryTo1.addEventListener("click", () => inputSubject.setModel(input1))
changeEntryTo2.addEventListener("click", () => inputSubject.setModel(input2))

counterMessage()