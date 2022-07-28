import "./Card.css";
const Card =({listItem})=>{
    return(
        <>
            <div className="card">
                <h1>
                    {listItem.title}
                </h1>
                <p>
                    {
                        listItem.description
                    }
                </p>
            </div>
        </>
    )
}

export default Card;