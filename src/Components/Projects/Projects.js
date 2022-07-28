import "./Projects.css";
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {v4 as uuidv4} from 'uuid';
import filter from "../../images/bi_filter.svg";
import plus from "../../images/plus.svg";
import searchIcon from "../../images/searchButton.svg";
import CardList from "../CardList/CardList";
const Projects = () => {
    // console.log(uuidv4());
    const Initial = {
        title: "",
        description: "",
        id:""
    }

    const [displayCompleted, setDisplayCompleted] = useState("none");
    const [displayInProgress, setDisplayInProgress] = useState("none");
    const [displayTodo, setDisplayTodo] = useState("none");
    const [inputTodo, setInputTodo] = useState(Initial)
    const [inputInProgress, setInputInProgress] = useState(Initial)
    const [inputCompleted, setInputCompleted] = useState(Initial)
    const [todoList, setTodoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const handleAddNote = (event) => {
        console.log(event.target.id);

        if (event.target.id == "completed") {

            if (displayCompleted == "none") {

                setDisplayCompleted("block");
            }
            else {
                setDisplayCompleted("none");
            }
        }
        else if (event.target.id == "inProgress") {
            if (displayInProgress == "none") {

                setDisplayInProgress("block");
            }
            else {
                setDisplayInProgress("none");
            }
        }
        else if (event.target.id == "todo") {
            if (displayTodo == "none") {

                setDisplayTodo("block");
            }
            else {
                setDisplayTodo("none");
            }
        }
    }
    const handleTitle = (e) => {
        if (e.target.name === "titleTodo") {
            setInputTodo({ title: e.target.value, description: inputTodo.description});

        }
        else if (e.target.name === "titleInProgress") {
            setInputInProgress({ title: e.target.value, description: inputInProgress.description});
        }
        else if (e.target.name === "titleCompleted") {
            setInputCompleted({ title: e.target.value, description: inputCompleted.description});
        }
    }
    const handleDescription = (e) => {
        if (e.target.name === "descriptionTodo") {
            setInputTodo({ description: e.target.value, title: inputTodo.title, id:uuidv4() });

        }
        else if (e.target.name === "descriptionInProgress") {
            setInputInProgress({ description: e.target.value, title: inputInProgress.title, id:uuidv4()});
        }
        else if (e.target.name === "descriptionCompleted") {
            setInputCompleted({ description: e.target.value, title: inputCompleted.title, id:uuidv4()});
        }
    }
    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log(e.key);
            console.log(e.target.name);
            if (e.target.name === "descriptionTodo") {
                console.log("handle submit trigered");
                todoList.push(inputTodo);
                setTodoList(todoList);
                setInputTodo(Initial);
                setDisplayTodo("none");
                console.log(todoList);
            }
            else if (e.target.name === "descriptionInProgress") {
                inProgressList.push(inputInProgress);
                setInProgressList(inProgressList);
                setInputInProgress(Initial);
                setDisplayInProgress("none");
                console.log(inProgressList);
            }
            else if (e.target.name === "descriptionCompleted") {
                completedList.push(inputCompleted);
                setCompletedList(completedList);
                setInputCompleted(Initial);
                setDisplayCompleted("none");
            }
        }
    }
    console.log(inputTodo);
    console.log(inputInProgress);
    console.log(inputCompleted);
    return (
        <>
            <div className="ProjectsComp">
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search" />
                    <span>Search</span>
                </div>
                <p>Projects</p>
                <div className="filter">
                    <img src={filter} alt="filter" />
                    <span>Filter</span>
                </div>
                <DragDropContext onDragEnd={result => console.log(result)}>
                    <Droppable droppableId="todoList">
                        {
                            (provided, snapshot) => {
                                return (
                                    <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
                                        
                                        <h1>To do</h1>
                                        <button id="todo" className="add" onClick={handleAddNote}><img className="addImg" src={plus} /></button>
                                        <div className="addNoteInput" style={{ display: displayTodo }}>
                                            <form onKeyPress={handleSubmit}>
                                                <input className="titleInput" onChange={handleTitle} type="text" value={inputTodo.title} name="titleTodo" placeholder="Give your task a title" />
                                                <textarea className="descriptionInput" type="text" onChange={handleDescription} name="descriptionTodo" value={inputTodo.description} placeholder="Description.." />
                                            </form>
                                        </div>
                                        
                                            <CardList list={todoList} />
                                       
                                    </div>
                                )
                            }
                        }

                    </Droppable >

                    <div className="inProgress">
                        <h1>InProgress</h1>
                        <button id="inProgress" className="add" onClick={handleAddNote}><img className="addImg" src={plus} /></button>
                        <div className="addNoteInput" style={{ display: displayInProgress }}>
                            <form onKeyPress={handleSubmit}>
                                <input className="titleInput" type="text" onChange={handleTitle} name="titleInProgress" value={inputInProgress.title} placeholder="Give your task a title" />
                                <textarea className="descriptionInput" type="textInProgress" onChange={handleDescription} name="descriptionInProgress" value={inputInProgress.description} placeholder="Description.." />
                            </form>
                        </div>
                        <CardList list={inProgressList} />
                    </div>
                    <div className="completed">
                        <h1>Completed</h1>
                        <button id="completed" onClick={handleAddNote} className="add"><img className="addImg" src={plus} /></button>
                        <div className="addNoteInput" style={{ display: displayCompleted }}>
                            <form onKeyPress={handleSubmit}>
                                <input className="titleInput" type="text" value={inputCompleted.title} onChange={handleTitle} name="titleCompleted" placeholder="Give your task a title" />
                                <textarea className="descriptionInput" type="text" onChange={handleDescription} name="descriptionCompleted" value={inputCompleted.description} placeholder="Description.." />
                            </form>
                        </div>
                        <CardList list={completedList} />
                    </div>
                </DragDropContext>
            </div>
        </>
    )
}
export default Projects;