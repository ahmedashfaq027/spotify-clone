import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "./DataLayer";

const Footer = () => {
    const [{ selected_track }] = useDataLayerValue();

    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src={selected_track?.album.images[0].url}
                    alt=""
                />
                <div className="footer__songInfo">
                    <h4>{selected_track ? selected_track?.name : "track"}</h4>
                    <p>
                        {selected_track?.artists
                            .map((artist) => artist.name)
                            .join(", ")}
                    </p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                />
                <SkipNext className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
