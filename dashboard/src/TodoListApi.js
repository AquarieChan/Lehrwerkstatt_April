export default class TodoListApi {
    static async save(todos){
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    static async load(){
        return JSON.parse(localStorage.getItem('todos')||'[]')
    }
}