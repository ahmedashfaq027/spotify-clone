import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { useDataLayerValue } from "./DataLayer";

const Player = ({ spotify }) => {
    const [{ discover_weekly, selected_playlist }] = useDataLayerValue();

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar spotify={spotify} />
                <Body
                    playlist={
                        selected_playlist ? selected_playlist : discover_weekly
                    }
                />
            </div>

            <Footer />
        </div>
    );
};

export default Player;
