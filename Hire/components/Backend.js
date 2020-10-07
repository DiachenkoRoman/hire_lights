import {PM} from "./PM.js";

export class Backend extends PM{
    constructor({name, gender, age, type}) {
        super(name, gender, age);
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.type = type;

    }
}
