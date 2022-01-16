import './ModelPicker.scss';

import {Component} from "react";
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

export class ModelPicker extends Component {
    render() {
        return (
            <div className="buttons_model">
                <button className="button_hat" id={this.props.modelPicker === 0 ? "button_active" : ""}
                        onClick={this.props.onClickButtonHat}>
                    <SchoolRoundedIcon id="icon"/>Hat
                </button>

                <button className="button_face" id={this.props.modelPicker === 1 ? "button_active" : ""}
                        onClick={this.props.onClickButtonFace}>
                    <TagFacesRoundedIcon id="icon"/>Face
                </button>
            </div>
        )
    }
}