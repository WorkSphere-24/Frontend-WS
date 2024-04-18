const DisplayInfo = (props) => {
    const Work = props.work;
    return ( 
        <>
        {Work.map((works) => (
            <div className="main h-full w-[full] bg-transparent flex flex-col justify-center items-start px-[2vw]">
                <h1 className="text-black text-[35px] font-bold">{works.name}</h1>
                <h4 className="text-gray-600 text-[15px]">{works.desc}</h4>

            </div>
        ))}
            
        </>
     );
}
 
export default DisplayInfo;