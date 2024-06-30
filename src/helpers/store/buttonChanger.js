import { makeAutoObservable } from "mobx"


class buttonChanger {
    FirstButtonName = "Alert!"
    SecondButtonName = "Only Number!"
    buttonOrder = { order: 0 };
    tip = 3

    constructor() {
        makeAutoObservable(this)
    }
    AllButtonRight() {
        this.FirstButtonName = "Clear"
        this.SecondButtonName = "Hello world!"
        this.buttonOrder = { order: 1 }
    }

    ButtonDefaultStatus() {
        this.FirstButtonName = "Alert!"
        this.SecondButtonName = "Only Number!"
        this.buttonOrder = { order: 0 }
    }

    ThreeTip() {
        this.tip = 3
    }

    TenTip() {
        this.tip = 10
    }
}

export default buttonChanger;