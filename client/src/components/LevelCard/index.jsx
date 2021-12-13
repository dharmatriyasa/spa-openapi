const LevelCard = (props) => {

    // const 

    return (
        <button onClick={props.changeLevelRooms} className={` flex justify-center items-center w-20 md:w-44 h-16 mx-1 bg-gray-800 rounded-md ${props.bgActive}`}>
            <h1 className="text-xs md:text-sm font-bold text-center text-white">{props.name}</h1>
        </button>
    );
}
 
export default LevelCard;