import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./SongRow.css";

const SongRow = ({ track = "test" }) => {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useDataLayerValue();

    const selectTrackHandler = (e) => {
        dispatch({
            type: "SET_SELECTEDTRACK",
            selected_track: track,
        });
    };

    return (
        <div className="songRow" onClick={(e) => selectTrackHandler(e)}>
            <img
                className="songRow__album"
                src={track.album.images[0].url}
                alt=""
            />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
};

export default SongRow;
