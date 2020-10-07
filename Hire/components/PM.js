export class PM {
    constructor({name, gender, age, type}) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.type = type;
        this.item = "";
    }

    translator = () =>{
        this.hire(this.item)
    }

    hire = (container) =>{
        document.querySelector(".my_team").appendChild(container);
    }

    render(path){
        this.item = document.createElement("div");
        this.item.classList.add("worker")
        // this.item.innerHTML= `
        //     <span>${this.name}</span>
        //     <span>${this.gender}</span>
        //     <span>${this.age}</span>
        //     <button class="worker__hire">Hire</button>
        // `
        let nameString = document.createElement("span");
        let genderString = document.createElement("span");
        let typeString = document.createElement("span");
        let ageString = document.createElement("span");
        let hireBut = document.createElement("button");

        nameString.innerText = this.name;
        this.item.appendChild(nameString);

        genderString.innerText = this.gender;
        this.item.appendChild(genderString);

        typeString.innerText = this.type;
        this.item.appendChild(typeString)

        ageString.innerText = this.age;
        this.item.appendChild(ageString);

        hireBut.innerText= "Hire";
        hireBut.addEventListener("click", this.translator);
        this.item.appendChild(hireBut);

        path.appendChild(this.item);
        // document.querySelectorAll(".worker__hire").forEach(elem => elem.addEventListener("click", this.translator));
    }
}
