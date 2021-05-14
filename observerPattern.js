class Subject{
    observers = []
    model;
    constructor(model){
        this.model = model
    }

    subscribe(o){
        this.observers.push(o)
    }

    unsubscribe(o){
        this.observers.filter(observer => observer !== o)
    }

    notify(){
        this.observers.forEach(observer => observer.notify(this))
    }

    getModel(){
        return this.model
    }

    setModel(){
        /* implementation depending on the type of subject */
    }
}

class Observer{
    model;
    constructor(model){
        this.model = model
    }
}

class InputSubject extends Subject{

    listenerNotify = (e) => this.notify();

    constructor(input){
        super(input)
        this.setModel(input)
    }

    setModel(input){
        //remove event listener from old model/input
        this.model.removeEventListener("keyup", this.listenerNotify)
        this.model = input
        this.model.addEventListener("keyup", this.listenerNotify)
        this.notify()
    }
}

class TextAreaObserver extends Observer{
    constructor(textArea){
        super(textArea)
    }

    notify(subject){
        this.model.value = subject.model.value
    }
}


export {
    InputSubject,
    TextAreaObserver
}