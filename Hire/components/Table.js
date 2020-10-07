import {ProjectManager, BackendDeveloper, Designer, FrontendDeveloper} from "./methods.js";
import {PM} from "./PM.js";
import {Frontend} from "./Frontend.js";
import {Design} from "./Design.js";
import {Backend} from "./Backend.js";

const data = [ProjectManager("Vasil", "Reptiloid", 22), BackendDeveloper("Ivan", "Kozak", 22), Designer("Misha", "Zver", 35), FrontendDeveloper("Roman", "Durak", 24)];
const compliance = [
    {type: "pm", component: PM},
    {type: "frontend", component: Frontend},
    {type: "designer", component: Design},
    {type: "backend", component: Backend}
]

export class Table {
    constructor(root) {
        this.root = root

    }

    Factory = (obj) =>{
        if (obj.type){
            let Elem = compliance.find(item => obj.type === item.type);
            if (Elem){
                return new Elem.component(obj)
            }
        }
    }

    render(){

        let mainView = document.createElement("div");
        let workersList = document.createElement("div");
        this.root.appendChild(mainView);

        workersList.insertAdjacentHTML("afterbegin", "<h3>Available workers</h3>")
        workersList.classList.add("workers_list");

        mainView.appendChild(workersList);
        mainView.classList.add("table");

        data.map(elem => {
            let worker = this.Factory(elem);
            if (worker){
                worker.render(workersList)
            }
        })

        let myTeam = document.createElement("div");
        myTeam.insertAdjacentHTML("afterbegin", "<h3>My Team</h3>")
        myTeam.classList.add("my_team");
        mainView.appendChild(myTeam);

    }
}
