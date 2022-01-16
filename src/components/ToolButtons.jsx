import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import {Component} from "react";
import Stack from "@mui/material/Stack";
import {Tooltip, Zoom} from "@mui/material";
import './ToolButtons.scss';


export class ToolButtons extends Component {
    render() {
        return (
            <Stack spacing={1} direction="row">
                <Tooltip title="Random" TransitionComponent={Zoom}>
                    <button className="button_random" onClick={this.props.random}>
                        <ShuffleRoundedIcon/>
                    </button>
                </Tooltip>

                <button className="button_download" onClick={this.props.download}>
                    <DownloadRoundedIcon/>Download
                </button>
            </Stack>
        )
    }
}