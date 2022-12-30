export const getUsers = async () => {
    async function getListUsers() {
        const request = await fetch("http://localhost:5000/api/users", {
            method: "GET",
            headers: {
                //@ts-ignore
                Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        return request;
    }
    const request = await getListUsers();
    if (request.status === 401) {
        const refreshrequest = await fetch("http://localhost:5000/api/refresh", {
            method: "GET",
            credentials: "include",
        })
        const response = await refreshrequest.json();
        localStorage.setItem("user", JSON.stringify(response));
        const request = await getListUsers();
        return await request.json();
    }
    return await request.json();
}