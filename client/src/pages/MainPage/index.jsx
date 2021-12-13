
import { useState } from 'react';
import LevelCard from '../../components/LevelCard';
import Navbar from '../../components/Navbar';
import RoomCard from '../../components/RoomCard';
import Footer from '../../components/Footer';
import css from './styles.module.css';

import opponents from '../../data/opponents.json';
import user from '../../data/user.json';

const LOCAL_STORAGE_KEY = "isLoggedIn";

const MainPage = () => {
    const levels = [
        "NOVICE",
        "CLASS A",
        "CLASS B",
        "CLASS C",
        "CLASS D",
        "CANDIDATE MASTER",
        "GRAND MASTER",
    ]

    const levelsCard = levels.map((level, i) => {
        return <LevelCard key={i} changeLevelRooms={() => setFilterRooms(level)} name={level} />
    });

    const [levelActive,setLevelActive] = useState([levelsCard]);

    const changeActiveLevel = (level) => {
        
    }


    const filteringRooms = (levelRoom) => {
        const filteredRooms = opponents.filter((opponent) => opponent.level === levelRoom);

        const arrayFilteredRooms = [];

        filteredRooms.forEach((filteredRoom) => {
            arrayFilteredRooms.push(<RoomCard key={filteredRoom.id} name={filteredRoom.name} bio={filteredRoom.bio} avatar={filteredRoom.avatar} level={filteredRoom.level} createdAt={filteredRoom.createdAt} />)
        });
        return arrayFilteredRooms;
    }


    console.log(filteringRooms("GRAND MASTER"));
    const [listRoom, setListRoom] = useState([filteringRooms("GRAND MASTER")]);

    const setFilterRooms = (levelRoom) => {
        setListRoom(filteringRooms(levelRoom));
    }

    // const [activeLevel, setActiveLevel] = useState(false);
    let isLogin = false;
    const loginState = localStorage.getItem(LOCAL_STORAGE_KEY);
    const isLoggedIn = JSON.parse(loginState || "false");

    if(isLoggedIn){
        isLogin = true;
    }

    return (
        <div className={` ${css.gameBackground} flex flex-col pb-10`}>
            <div>
                <Navbar name={user.name} isLogin={isLogin} key="navbar"/>
            </div>
            <div className={`${css.fullScreen} `}>
                <div className={`pt-20 px-8 md:px-44`}>
                    <div className="py-4">
                        <h1 className="text-2xl text-white font-bold">CHOOSE YOUR OPPONENT</h1>
                    </div>
                    <div className={`grid grid-cols-3 gap-4 md:flex md:flex-row md:px-0 py-2`}>
                        {levelsCard}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-10 px-8 md:px-44">
                    {/* <RoomCard name={opponents[0].name} bio={opponents[0].bio} avatar={opponents[0].avatar} level={opponents[0].level} createdAt={opponents[0].createdAt} /> */}
                    {listRoom}
                </div>
            </div>
            <div className="px-12 md:px-44">
                <Footer />
            </div>
        </div>
    );
}
 
export default MainPage;