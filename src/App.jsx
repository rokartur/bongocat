import React, {useState} from "react";

import "./assets/scss/DesktopApp.scss";
import "./assets/scss/MobileApp.scss";

import {getRgb, rgbToHex} from "./assets/scripts/rgbToHex";
import {getRandomNumber} from "./assets/scripts/GetRandomNumber";
import {consoleCat} from "./assets/scripts/ConsoleCat";
import {download} from "./assets/scripts/Download";

import {AvatarPreview} from "./components/AvatarPreview";
import {ToolButtons} from "./components/ToolButtons";
import {ColorPicker} from "./components/ColorPicker";
import {ModelPicker} from "./components/ModelPicker";
import {Solid} from "./components/Solid";
import {Gradient} from "./components/Gradient";
import {FooterButtons} from "./components/FooterButtons";
import {Hats} from "./components/Hats";
import {Faces} from "./components/Faces";

consoleCat()

export default function App() {
    const [colorPicker, setColorPicker] = useState(0);

    const [colorBody, setColorBody] = useState("#FFFFFF");
    const [colorFace, setColorFace] = useState("#000000");

    const [colorBackground, setColorBackground] = useState("#000000");
    const [firstColorBody, setFirstColorBody] = useState("#FFFFFF");
    const [secondColorBody, setSecondColorBody] = useState("#FFFFFF");

    const [firstColorBackground, setFirstColorBackground] = useState("#000000");
    const [secondColorBackground, setSecondColorBackground] = useState("#000000");


    const [modelPicker, setModelPicker] = useState(0);

    const [hat, setHat] = useState(0);
    const [face, setFace] = useState(0);


    const randomAll = () => {
        const color_1 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_2 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_3 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_4 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_5 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_6 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_7 = {r: getRgb(), g: getRgb(), b: getRgb()};

        setColorBody(rgbToHex(color_1.r, color_1.g, color_1.b));
        setColorFace(rgbToHex(color_2.r, color_2.g, color_2.b));
        setColorBackground(rgbToHex(color_3.r, color_3.g, color_3.b));
        setFirstColorBody(rgbToHex(color_4.r, color_4.g, color_4.b));
        setSecondColorBody(rgbToHex(color_5.r, color_5.g, color_5.b));
        setFirstColorBackground(rgbToHex(color_6.r, color_6.g, color_6.b));
        setSecondColorBackground(rgbToHex(color_7.r, color_7.g, color_7.b));
        setHat(getRandomNumber(0, 7))
        setFace(getRandomNumber(0, 2))
    };

    return (
        <div className="App">
            <AvatarPreview colorPicker={colorPicker}
                           colorBody={colorBody} colorFace={colorFace} colorBackground={colorBackground}
                           firstColorBody={firstColorBody} secondColorBody={secondColorBody}
                           firstColorBackground={firstColorBackground} secondColorBackground={secondColorBackground}
                           hat={hat} face={face}/>

            <div className="tools_buttons">
                <ToolButtons random={randomAll} download={download}/>
            </div>

            <div className="picker">
                <div className="colors">
                    <ColorPicker colorPicker={colorPicker}
                                 onClickButtonSolid={() => setColorPicker(0)}
                                 onClickButtonGradient={() => setColorPicker(1)}/>

                    <div className="color_picker">
                        {colorPicker === 0 ?
                            <Solid
                                colorBody={colorBody}
                                onInputColorBody={(ev) => setColorBody(ev.target.value)}
                                onClickButtonRandomColorBody={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setColorBody(rgbToHex(color.r, color.g, color.b))
                                }}

                                colorFace={colorFace}
                                onInputColorFace={(ev) => setColorFace(ev.target.value)}
                                onClickButtonRandomColorFace={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setColorFace(rgbToHex(color.r, color.g, color.b))
                                }}

                                colorBackground={colorBackground}
                                onInputColorBackground={(ev) => setColorBackground(ev.target.value)}
                                onClickButtonRandomColorBackground={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setColorBackground(rgbToHex(color.r, color.g, color.b))
                                }}
                            /> : ""}

                        {colorPicker === 1 ?
                            <Gradient
                                firstColorBody={firstColorBody}
                                onInputFirstColorBody={(ev) => setFirstColorBody(ev.target.value)}
                                onClickButtonRandomFirstColorBody={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setFirstColorBody(rgbToHex(color.r, color.g, color.b))
                                }}

                                secondColorBody={secondColorBody}
                                onInputSecondColorBody={(ev) => setSecondColorBody(ev.target.value)}
                                onClickButtonRandomSecondColorBody={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setSecondColorBody(rgbToHex(color.r, color.g, color.b))
                                }}

                                colorFace={colorFace}
                                onInputColorFace={(ev) => setColorFace(ev.target.value)}
                                onClickButtonRandomColorFace={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setColorFace(rgbToHex(color.r, color.g, color.b))
                                }}

                                firstColorBackground={firstColorBackground}
                                onInputFirstColorBackground={(ev) => setFirstColorBackground(ev.target.value)}
                                onClickButtonRandomFirstColorBackground={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setFirstColorBackground(rgbToHex(color.r, color.g, color.b))
                                }}

                                secondColorBackground={secondColorBackground}
                                onInputSecondColorBackground={(ev) => setSecondColorBackground(ev.target.value)}
                                onClickButtonRandomSecondColorBackground={() => {
                                    const color = {r: getRgb(), g: getRgb(), b: getRgb()}
                                    setSecondColorBackground(rgbToHex(color.r, color.g, color.b))
                                }}
                            /> : ""}
                    </div>
                </div>

                <div className="models">
                    <ModelPicker modelPicker={modelPicker}
                                 onClickButtonHat={() => setModelPicker(0)}
                                 onClickButtonFace={() => setModelPicker(1)}/>

                    <div className="model_picker">
                        {modelPicker === 0 ?
                            <Hats
                                hat={hat}
                                onClickHatNone={() => setHat(0)}
                                onClickHatHalloween={() => setHat(1)}
                                onClickHatChristmas={() => setHat(2)}
                                onClickHatBowlerSmall={() => setHat(3)}
                                onClickHatBowler={() => setHat(4)}
                                onClickHatParty={() => setHat(5)}
                                onClickHatRussia={() => setHat(6)}
                                onClickHatPolice={() => setHat(7)}
                            /> : ""}

                        {modelPicker === 1 ?
                            <Faces
                                face={face}
                                onClickFaceSmile={() => setFace(0)}
                                onClickFaceSad={() => setFace(1)}
                                onClickFaceDeath={() => setFace(2)}
                            /> : ""}
                    </div>
                </div>
            </div>

            <div className="footer">
                <FooterButtons/>
            </div>
        </div>
    );
}
