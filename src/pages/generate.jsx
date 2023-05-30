import styles from "../styles/generate.module.scss";

import {useState} from "react";
import {getRgb, rgbToHex} from "../lib/rgbToHex.jsx";
import {getRandomNumber} from "../lib/getRandomNumber.jsx";
import download from "../lib/download.jsx";
import Avatar from "./avatar/avatar.jsx";
import {Tooltip} from "@nextui-org/react";
import dayjs from "dayjs";

const Generate = () => {
    const [resetClicked, setResetClicked] = useState(false);
    const [randomClicked, setRandomClicked] = useState(false);

    // 0 - background
    // 1 - eyes
    // 2 - mouth
    // 3 - hat
    const [edit, setEdit] = useState(0);

    // 0 - default
    // 1 - death
    // 2 - angry
    // 3 - wink
    // 4 - happy
    // 5 - sad
    const [eyes, setEyes] = useState(0);
    const eyesAmount = [0, 1, 2, 3, 4, 5]

    // 0 - default
    // 1 - neutral
    // 2 - sad
    const [mouth, setMouth] = useState(0);
    const mouthAmount = [0, 1, 2]

    // 0 - default
    // 1 - halloween
    // 2 - christmas
    // 3 - bowlerSmall
    // 4 - bowlerBig
    // 5 - party
    // 6 - police
    const [hat, setHat] = useState(0);
    const hatsAmount = [0, 1, 2, 3, 4, 5, 6]

    // false - solid
    // true - gradient
    const [colorPicker, setColorPicker] = useState(true);

    // solid background color
    const [solidBackgroundColor, setSolidBackgroundColor] = useState("#000000");

    // gradient background color
    const [firstGradientBackgroundColor, setFirstGradientBackgroundColor] = useState("#000000");
    const [secondGradientBackgroundColor, setSecondGradientBackgroundColor] = useState("#000000");

    // solid body color
    const [solidBodyColor, setSolidBodyColor] = useState("#FFFFFF");
    const [solidFaceColor, setSolidFaceColor] = useState("#000000");

    // gradient body color
    const [firstGradientBodyColor, setfirstGradientBodyColor] = useState("#FFFFFF");
    const [secondGradientBodyColor, setSecondGradientBodyColor] = useState("#FFFFFF");

    const randomAll = () => {
        const color_1 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_2 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_3 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_4 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_5 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_6 = {r: getRgb(), g: getRgb(), b: getRgb()};
        const color_7 = {r: getRgb(), g: getRgb(), b: getRgb()};

        setSolidBackgroundColor(rgbToHex(color_1.r, color_1.g, color_1.b));
        setFirstGradientBackgroundColor(rgbToHex(color_2.r, color_2.g, color_2.b));
        setSecondGradientBackgroundColor(rgbToHex(color_3.r, color_3.g, color_3.b));
        setSolidBodyColor(rgbToHex(color_4.r, color_4.g, color_4.b));
        setSolidFaceColor(rgbToHex(color_5.r, color_5.g, color_5.b));
        setfirstGradientBodyColor(rgbToHex(color_6.r, color_6.g, color_6.b));
        setSecondGradientBodyColor(rgbToHex(color_7.r, color_7.g, color_7.b));

        setEyes(getRandomNumber(0, 5))
        setMouth(getRandomNumber(0, 2))
        setHat(getRandomNumber(0, 6))
    };

    return (
        <main className={styles.mainContainer}>
            <div className={styles.avatarContainer}>
                <div className={styles.preview}>
                    <svg id={"avatar"}
                         className={styles.avatar}
                         width={1024}
                         height={1024}
                         viewBox={"0 0 1024 1024"}
                         xmlns={"http://www.w3.org/2000/svg"}
                    >
                        <Avatar.Gradient
                            firstBackgroundColor={firstGradientBackgroundColor}
                            secondBackgroundColor={secondGradientBackgroundColor}
                            firstBodyColor={firstGradientBodyColor}
                            secondBodyColor={secondGradientBodyColor}
                        />
                        <Avatar.Background
                            colorPicker={colorPicker}
                            solidBackgroundColor={solidBackgroundColor}
                        />
                        <Avatar.Body
                            colorPicker={colorPicker}
                            solidBodyColor={solidBodyColor}
                        />
                        <Avatar.Eyes
                            eyes={eyes}
                            solidFaceColor={solidFaceColor}
                        />
                        <Avatar.Mouth
                            mouth={mouth}
                            solidFaceColor={solidFaceColor}
                        />
                        <Avatar.Hat
                            hat={hat}
                        />
                    </svg>
                </div>

                <div className={styles.avatarActions}>
                    <Tooltip
                        content={"Reset"}
                        placement={"bottom"}
                        shadow={false}
                        css={{ fontWeight: 500 }}
                        hideArrow={true}
                    >
                        <button className={resetClicked ? styles.resetClicked : null}
                                onClick={() => {
                                    setResetClicked(resetClicked => !resetClicked)
                                    setEyes(0)
                                    setMouth(0)
                                    setHat(0)
                                    setSolidBackgroundColor("#000000")
                                    setFirstGradientBackgroundColor("#000000")
                                    setSecondGradientBackgroundColor("#000000")
                                    setSolidBodyColor("#FFFFFF")
                                    setSolidFaceColor("#000000")
                                    setfirstGradientBodyColor("#FFFFFF")
                                    setSecondGradientBodyColor("#FFFFFF")
                                    setTimeout(
                                        () => setResetClicked(false),
                                        600
                                    )
                                }}
                        >
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M24.285 3H11.73C6.25501 3 3 6.255 3 11.715V24.27C3 29.73 6.255 32.985 11.715 32.985H24.27C29.73 32.985 32.985 29.73 32.985 24.27V11.715C33 6.255 29.745 3 24.285 3Z" fill="#E5E5E5"/>
                                <path d="M25.17 13.605C24.825 13.08 24.12 12.945 23.61 13.29C23.1 13.635 22.95 14.34 23.295 14.85C24 15.9 24.36 17.13 24.36 18.39C24.36 21.9 21.495 24.765 17.985 24.765C14.475 24.765 11.61 21.9 11.61 18.39C11.61 14.88 14.475 12.015 17.985 12.015C18.27 12.015 18.54 12.045 18.825 12.075L18 12.69C17.505 13.05 17.385 13.755 17.76 14.265C17.985 14.565 18.33 14.73 18.675 14.73C18.9 14.73 19.14 14.655 19.335 14.52L22.245 12.39C22.26 12.375 22.26 12.36 22.275 12.36C22.29 12.345 22.305 12.345 22.32 12.33C22.365 12.285 22.395 12.24 22.425 12.195C22.47 12.135 22.53 12.09 22.56 12.015C22.59 11.955 22.605 11.88 22.635 11.82C22.65 11.745 22.68 11.685 22.695 11.61C22.71 11.535 22.695 11.475 22.68 11.4C22.68 11.325 22.68 11.265 22.65 11.19C22.635 11.115 22.59 11.055 22.56 10.98C22.53 10.935 22.53 10.875 22.485 10.815C22.47 10.8 22.455 10.8 22.455 10.785C22.44 10.77 22.44 10.755 22.425 10.74L19.92 7.87504C19.515 7.41004 18.795 7.35004 18.33 7.77004C17.865 8.17504 17.82 8.89504 18.225 9.36004L18.645 9.84004C18.435 9.82504 18.225 9.79504 18 9.79504C13.245 9.79504 9.375 13.665 9.375 18.42C9.375 23.175 13.245 27.045 18 27.045C22.755 27.045 26.625 23.175 26.625 18.42C26.625 16.68 26.13 15.03 25.17 13.605Z" fill="#E5E5E5"/>
                            </svg>
                        </button>
                    </Tooltip>

                    <Tooltip
                        content={"Download"}
                        placement={"bottom"}
                        shadow={false}
                        css={{ fontWeight: 500 }}
                        hideArrow={true}
                    >
                        <button onClick={() => download()}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M30.7501 15.2849H26.4151C22.8601 15.2849 19.9651 12.3899 19.9651 8.83488V4.49988C19.9651 3.67488 19.2901 2.99988 18.4651 2.99988H12.1051C7.48506 2.99988 3.75006 5.99988 3.75006 11.3549V24.6449C3.75006 29.9999 7.48506 32.9999 12.1051 32.9999H23.8951C28.5151 32.9999 32.2501 29.9999 32.2501 24.6449V16.7849C32.2501 15.9599 31.5751 15.2849 30.7501 15.2849Z" fill="white"/>
                                <path d="M23.7001 3.31487C23.0851 2.69987 22.0201 3.11987 22.0201 3.97487V9.20987C22.0201 11.3999 23.8801 13.2149 26.1451 13.2149C27.5701 13.2299 29.5501 13.2299 31.2451 13.2299C32.1001 13.2299 32.5501 12.2249 31.9501 11.6249C29.7901 9.44987 25.9201 5.53487 23.7001 3.31487Z" fill="white"/>
                                <path d="M18.42 22.08C17.985 21.645 17.265 21.645 16.83 22.08L15.75 23.16V16.875C15.75 16.26 15.24 15.75 14.625 15.75C14.01 15.75 13.5 16.26 13.5 16.875V23.16L12.42 22.08C11.985 21.645 11.265 21.645 10.83 22.08C10.395 22.515 10.395 23.235 10.83 23.67L13.83 26.67C13.845 26.685 13.86 26.685 13.86 26.7C13.95 26.79 14.07 26.865 14.19 26.925C14.34 26.97 14.475 27 14.625 27C14.775 27 14.91 26.97 15.045 26.91C15.18 26.85 15.3 26.775 15.42 26.67L18.42 23.67C18.855 23.235 18.855 22.515 18.42 22.08Z" fill="white"/>
                            </svg>
                        </button>
                    </Tooltip>

                    <Tooltip
                        content={"Random"}
                        placement={"bottom"}
                        shadow={false}
                        css={{ fontWeight: 500 }}
                        hideArrow={true}
                    >
                        <button className={randomClicked ? styles.randomClicked : null}
                                onClick={() => {
                                    setRandomClicked(randomClicked => !randomClicked)
                                    randomAll()
                                    setTimeout(
                                        () => setRandomClicked(false),
                                        600
                                    )
                                }}
                        >
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.3673 4.3679C7.21365 5.33154 4.125 9.05013 4.125 13.5C4.125 14.1213 3.62132 14.625 3 14.625C2.37868 14.625 1.875 14.1213 1.875 13.5C1.875 7.07368 7.07368 1.875 13.5 1.875C13.9053 1.875 14.2793 2.09302 14.479 2.44571C14.6787 2.79841 14.6732 3.23126 14.4647 3.5788L12.8897 6.2038C12.57 6.73658 11.879 6.90935 11.3462 6.58968C10.8134 6.27002 10.6407 5.57898 10.9603 5.0462L11.3673 4.3679ZM33 21.375C33.6213 21.375 34.125 21.8787 34.125 22.5C34.125 28.9263 28.9263 34.125 22.5 34.125C22.0947 34.125 21.7207 33.907 21.521 33.5543C21.3213 33.2016 21.3268 32.7687 21.5353 32.4212L23.1103 29.7962C23.43 29.2634 24.121 29.0907 24.6538 29.4103C25.1866 29.73 25.3593 30.421 25.0397 30.9538L24.6327 31.6321C28.7863 30.6685 31.875 26.9499 31.875 22.5C31.875 21.8787 32.3787 21.375 33 21.375Z" fill="#E5E7EB"/>
                                <path d="M24.6 12.3149L18.96 9.26994C18.36 8.95494 17.655 8.95494 17.055 9.26994L11.415 12.3149C11.01 12.5399 10.755 12.9749 10.755 13.4699C10.755 13.9649 11.01 14.3999 11.415 14.6249L17.055 17.6699C17.355 17.8349 17.685 17.9099 18.015 17.9099C18.345 17.9099 18.675 17.8349 18.975 17.6699L24.615 14.6249C25.02 14.3999 25.275 13.9649 25.275 13.4699C25.26 12.9749 25.005 12.5399 24.6 12.3149Z" fill="#E5E7EB"/>
                                <path opacity="0.4" d="M16.11 18.7049L10.86 16.0799C10.455 15.8849 9.98999 15.8999 9.59999 16.1399C9.20999 16.3799 8.98499 16.7849 8.98499 17.2349V22.1999C8.98499 23.0549 9.46501 23.8349 10.23 24.2099L15.48 26.8349C15.66 26.9249 15.855 26.9699 16.065 26.9699C16.305 26.9699 16.53 26.9099 16.74 26.7749C17.13 26.5349 17.355 26.1299 17.355 25.6799V20.7149C17.355 19.8599 16.89 19.0949 16.11 18.7049Z" fill="#E5E7EB"/>
                                <path opacity="0.4" d="M26.385 16.1399C25.995 15.8999 25.53 15.8849 25.125 16.0799L19.875 18.7049C19.11 19.0949 18.63 19.8599 18.63 20.7149V25.6799C18.63 26.1299 18.855 26.5349 19.245 26.7749C19.455 26.9099 19.68 26.9699 19.92 26.9699C20.115 26.9699 20.31 26.9249 20.505 26.8349L25.755 24.2099C26.52 23.8199 27 23.0549 27 22.1999V17.2349C27 16.7849 26.775 16.3799 26.385 16.1399Z" fill="#E5E7EB"/>
                            </svg>
                        </button>
                    </Tooltip>
                </div>

                <div className={styles.bongoSocialMedia}>
                    <a href={"https://github.com/rokartur/bongocat"} target={"_blank"}>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.871 2C6.27823 2 2 6.35477 2 12.0908C2 16.6772 4.98387 20 8.83468 21.5083C9.35081 21.6034 9.53226 21.2767 9.53226 21.0079C9.53226 20.8776 9.52914 20.5712 9.52607 20.1873C9.52095 19.5485 8.92155 19.0655 8.2833 19.0392C7.44539 19.0047 6.43312 18.7372 6.10484 17.7111C6.10484 17.7111 5.64516 16.5076 4.98387 16.1975C4.98387 16.1975 4.06048 15.5482 5.04839 15.5606C5.04839 15.5606 5.94758 15.5157 6.5 16.5C6.85678 17.1357 7.5 17.5 8.5 17.5C8.96445 17.5 9.2993 17.2565 9.55383 16.9683C9.83575 16.6492 9.53994 16.0262 9.12004 15.9553C7.26863 15.6426 5.66129 14.873 5.66129 11.5284C5.66129 10.3911 5.96774 9.82039 6.6129 9.09253C6.51948 8.85298 6.23714 7.94677 6.56768 6.73971C6.64768 6.44755 6.89331 6.22109 7.1923 6.26974C8.12977 6.4223 9.5 7.40108 9.5 7.40108C10.3065 7.16948 11.1734 7.04955 12.0323 7.04955C12.8911 7.04955 13.7581 7.16948 14.5645 7.40108C14.5645 7.40108 15.9369 6.41786 16.8744 6.268C17.1723 6.22038 17.4163 6.44677 17.496 6.73774C17.8279 7.94854 17.5451 8.85278 17.4516 9.09253C18.0968 9.82453 18.4919 10.3952 18.4919 11.5284C18.4919 14.861 16.8357 15.6327 14.9768 15.9484C14.5498 16.0209 14.3065 16.6374 14.4251 17.054C14.5025 17.3259 14.5484 17.6458 14.5484 18.0171C14.5484 19.4108 14.5363 20.6605 14.5363 20.9996C14.5363 21.2684 14.7218 21.5951 15.2339 21.5C19 20 22 16.6772 22 12.0908C22 6.35477 17.4637 2 11.871 2Z" fill="white"/>
                            </svg>
                        </span>
                        repository
                    </a>

                    <a href={"https://github.com/rokartur"} target={"_blank"}>
                        rokartur &#169; {dayjs().format("YYYY")}
                    </a>
                </div>
            </div>

            <div className={styles.editContainer}>
                <div className={styles.editList}>
                    <button className={edit === 0 ? styles.editButtonActive : styles.editButton}
                            onClick={() => setEdit(0)}
                    >
                        background
                    </button>

                    <button className={edit === 1 ? styles.editButtonActive : styles.editButton}
                            onClick={() => setEdit(1)}
                    >
                        eyes
                    </button>

                    <button className={edit === 2 ? styles.editButtonActive : styles.editButton}
                            onClick={() => setEdit(2)}
                    >
                        mouth
                    </button>

                    <button className={edit === 3 ? styles.editButtonActive : styles.editButton}
                            onClick={() => setEdit(3)}
                    >
                        hat
                    </button>
                </div>

                <div className={styles.editContent}>
                    {edit === 0 &&
                        <>
                            <div className={styles.editSelectSolidOrGradient}>
                                <p>
                                    Solid
                                </p>

                                <button className={colorPicker ? styles.editToggleButtonZero : styles.editToggleButtonOne}
                                        onClick={() => setColorPicker(colorPicker => !colorPicker)}>
                                    <div className={styles.editToggleButtonDot}/>
                                </button>

                                <p>
                                    Gradient
                                </p>
                            </div>

                            {colorPicker ?
                                <div className={styles.editColorInputsContainer}>
                                    <div>
                                        <input type="color" value={solidFaceColor} onInput={(event) => setSolidFaceColor(event.target.value)}/>
                                        Face
                                    </div>

                                    <div>
                                        <input type="color" value={solidBodyColor} onInput={(event) => setSolidBodyColor(event.target.value)}/>
                                        Body
                                    </div>

                                    <div>
                                        <input type="color" value={solidBackgroundColor} onInput={(event) => setSolidBackgroundColor(event.target.value)}/>
                                        Background
                                    </div>
                                </div>
                                :
                                <div className={styles.editColorInputsContainer}>
                                    <div>
                                        <input type="color" value={solidFaceColor} onChange={(event) => setSolidFaceColor(event.target.value)}/>
                                        Face
                                    </div>

                                    <div>
                                        <input type="color" value={firstGradientBodyColor} onInput={(event) => setfirstGradientBodyColor(event.target.value)}/>
                                        Body 1
                                    </div>

                                    <div>
                                        <input type="color" value={secondGradientBodyColor} onInput={(event) => setSecondGradientBodyColor(event.target.value)}/>
                                        Body 2
                                    </div>

                                    <div>
                                        <input type="color" value={firstGradientBackgroundColor} onInput={(event) => setFirstGradientBackgroundColor(event.target.value)}/>
                                        Background 1
                                    </div>

                                    <div>
                                        <input type="color" value={secondGradientBackgroundColor} onChange={(event) => setSecondGradientBackgroundColor(event.target.value)}/>
                                        Background 2
                                    </div>
                                </div>
                            }
                        </>
                    }

                    {edit === 1 &&
                        <div className={styles.editColorInputsContainer}>
                            {eyesAmount.map((number) => {
                                return (
                                    <button className={eyes === number ? styles.editSelectAvatarPreviewActive : styles.editSelectAvatarPreview}
                                            onClick={() => setEyes(number)}
                                    >
                                        <svg width={1024}
                                             height={1024}
                                             viewBox={"0 0 1024 1024"}
                                             xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                            <Avatar.Gradient
                                                firstBackgroundColor={"#000000"}
                                                secondBackgroundColor={"#000000"}
                                                firstBodyColor={"#FFFFFF"}
                                                secondBodyColor={"#FFFFFF"}
                                            />
                                            <Avatar.Background
                                                colorPicker={true}
                                                solidBackgroundColor={"#000000"}
                                            />
                                            <Avatar.Body
                                                colorPicker={true}
                                                solidBodyColor={"#FFFFFF"}
                                            />
                                            <Avatar.Eyes
                                                eyes={number}
                                                solidFaceColor={"#000000"}
                                            />
                                            <Avatar.Mouth
                                                mouth={mouth}
                                                solidFaceColor={"#000000"}
                                            />
                                            <Avatar.Hat
                                                hat={hat}
                                            />
                                        </svg>
                                    </button>
                                );
                            })}
                        </div>
                    }

                    {edit === 2 &&
                        <div className={styles.editColorInputsContainer}>
                            {mouthAmount.map((number) => {
                                return (
                                    <button className={mouth === number ? styles.editSelectAvatarPreviewActive : styles.editSelectAvatarPreview}
                                            onClick={() => setMouth(number)}
                                    >
                                        <svg width={1024}
                                             height={1024}
                                             viewBox={"0 0 1024 1024"}
                                             xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                            <Avatar.Gradient
                                                firstBackgroundColor={"#000000"}
                                                secondBackgroundColor={"#000000"}
                                                firstBodyColor={"#FFFFFF"}
                                                secondBodyColor={"#FFFFFF"}
                                            />
                                            <Avatar.Background
                                                colorPicker={true}
                                                solidBackgroundColor={"#000000"}
                                            />
                                            <Avatar.Body
                                                colorPicker={true}
                                                solidBodyColor={"#FFFFFF"}
                                            />
                                            <Avatar.Eyes
                                                eyes={eyes}
                                                solidFaceColor={"#000000"}
                                            />
                                            <Avatar.Mouth
                                                mouth={number}
                                                solidFaceColor={"#000000"}
                                            />
                                            <Avatar.Hat
                                                hat={hat}
                                            />
                                        </svg>
                                    </button>
                                );
                            })}
                        </div>
                    }

                    {edit === 3 &&
                        <div className={styles.editColorInputsContainer}>
                            {hatsAmount.map((number) => {
                                return (
                                    <button className={hat === number ? styles.editSelectAvatarPreviewActive : styles.editSelectAvatarPreview}
                                            onClick={() => setHat(number)}
                                    >
                                        <svg width={1024}
                                             height={1024}
                                             viewBox={"0 0 1024 1024"}
                                             xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                            <Avatar.Gradient
                                                firstBackgroundColor={"#000000"}
                                                secondBackgroundColor={"#000000"}
                                                firstBodyColor={"#FFFFFF"}
                                                secondBodyColor={"#FFFFFF"}
                                            />
                                            <Avatar.Background
                                                colorPicker={true}
                                                solidBackgroundColor={"#000000"}
                                            />
                                            <Avatar.Body
                                                colorPicker={true}
                                                solidBodyColor={"#FFFFFF"}
                                            />
                                            <Avatar.Eyes
                                                eyes={eyes}
                                                solidFaceColor={"#000000"}
                                            />
                                            <Avatar.Mouth
                                                mouth={mouth}
                                                solidFaceColor={"#000000"}
                                            />
                                            <Avatar.Hat
                                                hat={number}
                                            />
                                        </svg>
                                    </button>
                                );
                            })}
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}

export default Generate;
