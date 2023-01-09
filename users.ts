const { trimStr } = require("./utils");

let users: any = [];

const findUser = (user: any) => {
    const userName = trimStr(user.name);
    const userRoom = trimStr(user.room);

    return users.find(
        (u: any) => trimStr(u.name) === userName && trimStr(u.room) === userRoom
    );
};

const addUser = (user: any) => {
    const isExist = findUser(user);

    !isExist && users.push(user);

    const currentUser = isExist || user;

    return { isExist: !!isExist, user: currentUser };
};

const getRoomUsers = (room: any) => users.filter((u: any) => u.room === room);

const removeUser = (user: any) => {
    const found = findUser(user);

    if (found) {
        users = users.filter(
            //@ts-ignore
            ({ room, name }) => room === found.room && name !== found.name
        );
    }

    return found;
};

module.exports = { addUser, findUser, getRoomUsers, removeUser };