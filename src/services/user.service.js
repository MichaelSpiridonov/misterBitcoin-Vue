const user = {
    name: "Puki Ben David",
    balance: 300,
    transactions: []
}

export const userService = {
    getUser,
}

function getUser() {
    return user
}