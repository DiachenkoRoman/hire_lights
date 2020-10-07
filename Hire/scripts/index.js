/*

    Используя методы для создания объектов из задания по композиции написать фабику (HeadHunt), которая будет
    расспределять и создавать сотрудников компании нужного типа.

    Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2

    HeadHunt => {
        hire( obj ){
        ...
        }
    }

    Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики
*/
import {Table} from "../components/Table.js";

const root = document.querySelector("#root");
const MainView = new Table(root);

document.addEventListener("DOMContentLoaded", function () {
    MainView.render()
})
