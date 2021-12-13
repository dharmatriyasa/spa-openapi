const RoomCard = (props) => {
    return (
        <div className="flex flex-col bg-gray-800 h-60 p-5 rounded-lg">
            <div className="flex flex-row">
                <div className="w-2/12 pt-2">
                    <img className="h-10 rounded-full" src={props.avatar} alt="" />
                </div>
                <div className="flex flex-col pl-6">
                    <div className="">
                        <h1 className="text-lg text-yellow-400">{props.name}</h1>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">{props.level}</p>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <h2 className="text-sm text-white">{props.bio}</h2>
            </div>
            <div className="pt-4">
                <p className="text-xs text-gray-400">{props.createdAt}</p>
            </div>
            <div className="pt-4">
                <button className="bg-yellow-500 py-1 px-4 text-white rounded-full" type="submit">FIGHT</button>
            </div>
        </div>
    );
}
 
export default RoomCard;