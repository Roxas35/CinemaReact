import { Link } from "react-router-dom"

export const Film = ({ data }) => {


    return (
        <Link className="card" to={`/${data.show.id}`}>
            <img height='350px' src={data.show?.image?.medium} />
        </Link>
    )
}