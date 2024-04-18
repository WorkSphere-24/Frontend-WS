import { LuLayoutTemplate } from "react-icons/lu";
import Dashboard from "../pages/Dashboard";
import DisplayInfo from "./DisplayInfo";
import { useState } from "react";

const WorkBtn = (props) => {
    const Name = props.names;
    const ID = props.id;
    const display = props.dis;
    const [work, setWork] = useState([
        {
            id: "1",
            name: "Task 1",
            desc: "This is Task 1"
        },
        {
            id: "2",
            name: "Task 2",
            desc: "This is Task 2"
        },
        {
            id: "3",
            name: "Task 3",
            desc: "This is Task 3"
        }
    ]);
    const [text, setText] = useState([]);

    const editTitle = (event) => {
        const newTitle = prompt("Enter new title:", event.target.innerText);
        if (newTitle !== null) {
            event.target.innerText = newTitle;
        }
    };
    
    return (
        <>
            <button className=" w-full rounded-[3px] h-[40px] px-[10px] bg-[#c4b4ff] hover:bg-[#886ef2] flex justify-start items-center gap-[8px]" onClick={() => {
                console.log(text);
                display(ID);
                <DisplayInfo work={text.filter((text) => text.id)} />
            }}>
                <LuLayoutTemplate />
                <h2 onDoubleClick={editTitle}>{Name}</h2>
            </button>
        </>
    );
};

export default WorkBtn;
