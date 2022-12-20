"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function containerPostLoginData() {
    return /div>;
}
exports.default = containerPostLoginData;
/*export async function postLogin() {
    const { nickName, email, password } = state;
    const data = {
        nickName: nickName,
        email: email,
        password: password,
    };
    const propertyPost: PropertyPostType = {
        method: 'POST',
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: 'include',
    }
    if (email === "" || password === "") {
        return console.log("Поля должны быть заполнены");
    }
    try {
        const response = await fetch('http://localhost:5000/api/login', propertyPost)
        const user = await response.json();
        if (user.message === undefined) {
            localStorage.setItem("UserData", JSON.stringify(user.userData));
            return messegServer.push('Операция прошла успешно');
        } else {
            return messegServer.push(user.message.errors[0]["msg"]);
        }
    } catch (error) {
        console.log(error);
    }
}*/ 
