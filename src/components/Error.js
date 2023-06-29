import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1>Ooops!!!</h1>
            {err.data}
        </div>
    )
}

export default Error