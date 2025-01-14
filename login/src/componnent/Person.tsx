import { useParams } from "react-router"

const Person = () => {

    const { name } = useParams()

    return (<>

        <h1>Person</h1>
        <h4>{name}</h4>
    </>)
}

export default Person