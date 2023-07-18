import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "demouser",
})

export default UserContext