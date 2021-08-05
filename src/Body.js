import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = ({ playlist }) => {
    return (
        <div className="body">
            <Header />

            <div className="body__info">
                <img src={playlist?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{playlist?.name}</h2>
                    <p>{playlist?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {/* {List of songs} */}
                {playlist?.tracks?.items?.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
};

export default Body;
