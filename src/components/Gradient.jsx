import {Component} from "react";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import {Tooltip, Zoom} from "@mui/material";

export class Gradient extends Component {
    render() {
        return (
            <table className="buttons_gradient">
                <tr>
                    <th>Body 1</th>
                    <th>
                        <input type="color"
                               value={this.props.firstColorBody}
                               onInput={this.props.onInputFirstColorBody}/>
                    </th>
                    <th>
                        <Tooltip title="Random first body color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomFirstColorBody}>
                                <ShuffleRoundedIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                    </th>
                </tr>
                <tr>
                    <th>Body 2</th>
                    <th>
                        <input type="color"
                               value={this.props.secondColorBody}
                               onInput={this.props.onInputSecondColorBody}/>
                    </th>
                    <th>
                        <Tooltip title="Random second body color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomSecondColorBody}>
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
                    <th>Background 1</th>
                    <th>
                        <input type="color"
                               value={this.props.firstColorBackground}
                               onInput={this.props.onInputFirstColorBackground}/>
                    </th>
                    <th>
                        <Tooltip title="Random first background color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomFirstColorBackground}>
                                <ShuffleRoundedIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                    </th>
                </tr>
                <tr>
                    <th>Background 2</th>
                    <th>
                        <input type="color"
                               value={this.props.secondColorBackground}
                               onInput={this.props.onInputSecondColorBackground}/>
                    </th>
                    <th>
                        <Tooltip title="Random second background color" placement="right" TransitionComponent={Zoom}>
                            <button className="button_random_part"
                                    onClick={this.props.onClickButtonRandomSecondColorBackground}>
                                <ShuffleRoundedIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                    </th>
                </tr>
            </table>
        );
    }
}