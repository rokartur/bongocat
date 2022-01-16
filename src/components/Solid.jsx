import {Component} from "react";
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import {Tooltip, Zoom} from "@mui/material";

export class Solid extends Component {
    render() {
        return (
            <table className="buttons_solid">
                <tr>
                    <th>Body</th>
                    <th>
                        <input type="color"
                               value={this.props.colorBody}
                               onInput={this.props.onInputColorBody}/>
                    </th>
                    <th>
                        <Tooltip title="Random body color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomColorBody}>
                                <ShuffleRoundedIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                    </th>
                </tr>
                <tr>
                    <th>Face</th>
                    <th>
                        <input type="color"
                               value={this.props.colorFace}
                               onInput={this.props.onInputColorFace}/>
                    </th>
                    <th>
                        <Tooltip title="Random face color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomColorFace}>
                                <ShuffleRoundedIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                    </th>
                </tr>
                <tr>
                    <th>Background</th>
                    <th>
                        <input type="color"
                               value={this.props.colorBackground}
                               onInput={this.props.onInputColorBackground}/>
                    </th>
                    <th>
                        <Tooltip title="Random background color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomColorBackground}>
                                <ShuffleRoundedIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                    </th>
                </tr>
            </table>
        )
    }
}