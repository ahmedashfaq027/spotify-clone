import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon, playlist, spotify }) => {
    const [{}, dispatch] = useDataLayerValue();

    const selectPlaylistHandler = (e) => {
        if (!playlist) return;

        spotify.getPlaylist(playlist?.id).then((response) => {
            console.log("response:", response);
            dispatch({
                type: "SET_SELECTEDPLAYLIST",
                selected_playlist: response,
            });
        });
    };

    return (
        <div
            className="sidebarOption"
            onClick={(e) => selectPlaylistHandler(e)}
        >
            {Icon && <Icon className="sidebarOption__icon"></Icon>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
};

export default SidebarOption;
