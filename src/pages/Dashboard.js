import { GoHome } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { LuLayoutTemplate } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Tablet from "../components/Tablet";
import { useState } from "react";
import WorkBtn from "../components/WorkBtn.js";
import DisplayInfo from "../components/DisplayInfo.js";

const Dashboard = (props) => {
    
    const [work,setWork] = useState([
        {
            id:"1",
            name:"Task 1",
            desc:"This is Task 1"
        },
        {
            id:"2",
            name:"Task 2",
            desc:"This is Task 2"

        },
        {
            id:"3",
            name:"Task 3",
            desc:"This is Task 3"

        }
    ])
  const[text,setText] = useState([]);
  let display = (id) => { 
    const newDisplay = work.filter(works => works.id===id);
    console.log(newDisplay);
    setText(newDisplay);
  }


    return (
        <>
            <div className="container h-screen w-full bg-[#e1daff] flex justify-center items-center gap-[10px] px-[10px]">

                <div className="left-section w-[16%] h-[95%] bg-white rounded-[10px] ">
                    <div className="left-links h-[15%] w-full px-[20px] flex flex-col justify-center items-start border-b-[1px] border-solid border-gray-300 font-regular">

                        <button className=" w-full h-[40px] flex justify-start items-center gap-[8px]">
                            <GoHome />
                            <h2>Home</h2>
                        </button>
                        <button className=" w-full h-[40px] flex justify-start items-center gap-[8px]">
                            <SlCalender />
                            <h2>My Work</h2>
                        </button>
                    </div>
                    {/* SEARCH & WORK SECTION OF LEFT SECTION */}
                    <div className="search-left  h-[85%] w-full  px-[10px] flex flex-col justify-start items-start py-[10px] gap-[20px]">
                        <div className="account h-[8%] w-full  flex justify-start items-center">
                            <select name="account" id="acc" className="h-[100%] w-[180px] bg-transparent font-bold">
                                <option value="w1">Main workspace</option>
                                <option value="w2">work 2</option>
                            </select>
                        </div>
                        <div className="search-bar flex justify-center items-center gap-[10px]">
                            <input type="text" placeholder="Search" className="h-[35px] w-[90%] rounded-[3px] px-[10px] border-solid border-2 border-gray-200"></input>
                            <button className="addBtn h-[30px] w-[30px] bg-[#8364ff] hover:bg-[#5c45b7] rounded-[3px] flex justify-center items-center font-regular text-[20px] text-white">+</button>
                        </div>
                        <div className="works h-[500px] w-full flex flex-col justify-start items-center gap-[10px]">
                            {
                                work.map((works) => {
                                    return(
                                        <WorkBtn dis={display} names={works.name} id={works.id} key={works.id} />
                                    );
                                })
                            }
                        </div>
                        <div className="logout h-[200px] w-full  flex justify-center items-center">
                            <button className="log bg-[#a690ff] h-[40px] w-[90%] rounded-[3px] ">
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
                <div className="right-section  w-[84%] h-[95%] bg-white rounded-[10px] flex flex-col justify-center items-center px-[30px]">
                        <div className="rtop h-[18%] w-[100%] border-b-[1px] border-solid border-gray-400">
                        <DisplayInfo work={text.filter((text) => text.id)} />
                            
                            {console.log(work)}
                        </div>
                        <div className="rbottom h-[82%] w-[100%]  bg-white">
                            <Tablet/>
                        </div>   
                </div>
            </div>
        </>
    );
}

export default Dashboard;