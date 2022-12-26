
export const getUsers = async () => {
    const request = await fetch("http://localhost:5000/api/users", {
        headers: {
            method: "GET",
            //@ts-ignore
            authorisation: JSON.parse(localStorage.getItem("user")).accessToken,
        }
    })
    return await request.json();
}