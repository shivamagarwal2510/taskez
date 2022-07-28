import Card from "../Card/Card";
import { Draggable } from "react-beautiful-dnd";
const CardList = ({ list }) => {
    return (
        <>{
            list.map((listItem, Index) => {

                return (
                    <Draggable key={listItem.id} draggableId={listItem.id} index={Index}>
                        {(provided, snapshot) => {
                            return (

                                <div className="card" 
                                ref={provided.innerRef}
                                {...provided.draggableProps} 
                                {...provided.dragHandleProps} 
                                style={{...provided.draggableProps.style}}>
                                    <h1>
                                        {listItem.title}
                                    </h1>
                                    <p>
                                        {
                                            listItem.description
                                        }
                                    </p>
                                </div>
                            )
                        }

                        }
                    </Draggable>
                )
            })
        }
        </>
    )
}
export default CardList;