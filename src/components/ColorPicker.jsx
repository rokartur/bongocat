import './ColorPicker.scss';

import {Component} from "react";
import ColorizeRoundedIcon from '@mui/icons-material/ColorizeRounded';
import GradientRoundedIcon from '@mui/icons-material/GradientRounded';

export class ColorPicker extends Component {
    render() {
        return (
            <div className="buttons_color">
                <button className="button_solid" id={this.props.colorPicker === 0 ? "button_active" : ""}
                        onClick={this.props.onClickButtonSolid}>
                    <ColorizeRoundedIcon id="icon"/>Solid
                </button>

                <button className="button_gradient" id={this.props.colorPicker === 1 ? "button_active" : ""}
                        onClick={this.props.onClickButtonGradient}>
                    <GradientRoundedIcon id="icon"/>Gradient
                </button>
            </div>
        )
    }
}