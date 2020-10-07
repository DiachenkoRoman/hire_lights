
const MakeBackendMagic = () =>({
    backMagic: () =>{console.log("Похоже на JSON!")}
})

const MakeFrontendMagic = () =>({
    fontMagic: () =>{console.log("Производительно!") }
})

const MakeItLooksBeautiful = () =>({
    designMagic: () =>{console.log("Красиво!")}
})

const DistributeTasks = () =>({
    pmMagic: () =>{console.log("Конечно, сделаем за 2 дня!")}
})

const DrinkSomeTea = () =>({
    drink: () =>{console.log("Два сахара, спасибо")}
})

const WatchYouTube = () =>({
    watch: () =>{console.log("Индус с палкой строит Las Vegas")}
})

const Procrastinate = () =>({
    procrastinate: () =>{console.log("...")}
})

export const ProjectManager = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age,
        type: "pm",
    };
    return Object.assign({}, stats, DistributeTasks(), Procrastinate(), DrinkSomeTea())

}

export const BackendDeveloper = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age,
        type: "backend",
    };
    return Object.assign({}, stats, MakeBackendMagic(), DrinkSomeTea(), Procrastinate())
}

export const FrontendDeveloper = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age,
        type: "frontend",
    };
    return Object.assign({}, stats, MakeFrontendMagic(), DrinkSomeTea(), WatchYouTube())
}

export const Designer = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age,
        type: "designer"
    };
    return Object.assign({}, stats, MakeItLooksBeautiful(), WatchYouTube(), Procrastinate())
}
