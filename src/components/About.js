import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User name={"Prithviraj Singh Thakur"} location={"Indore"} />

            <UserClass  name={"Prithviraj Singh Thakur"} location={"Indore"}/>
        </div>
    )
}

export default About