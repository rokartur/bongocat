import styles from '../styles/index.module.scss'
import Head from 'next/head'
import {useState} from "react";
import {Avatar} from "../components/avatar/avatar";
import {getRgb, rgbToHex} from "../scripts/rgbToHex";
import {getRandomNumber} from "../scripts/getRandomNumber";
import {download} from "../scripts/download";
import {AvatarHat} from "../components/avatar/avatarHat";
import {AvatarMouth} from "../components/avatar/avatarMouth";
import {AvatarEyes} from "../components/avatar/avatarEyes";
import {consoleCat} from "../scripts/consoleCat";

consoleCat()

export default function Home() {

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

  // 0 - default
  // 1 - neutral
  // 2 - sad
  const [mouth, setMouth] = useState(0);

  // 0 - default
  // 1 - halloween
  // 2 - christmas
  // 3 - bowlerSmall
  // 4 - bowlerBig
  // 5 - party
  // 6 - police
  const [hat, setHat] = useState(0);

  // 0 - solid
  // 1 - gradient
  const [colorPicker, setColorPicker] = useState(0);

  // solid background color
  const [solidBackgroundColor, setSolidBackgroundColor] = useState("#000000");

  // gradient background color
  const [firstGradientBackgroundColor, setFirstGradientBackgroundColor] = useState("#000000");
  const [secondGradientBackgroundColor, setSecondGradientBackgroundColor] = useState("#000000");

  // solid body color
  const [bodyColor, setBodyColor] = useState("#FFFFFF");
  const [faceColor, setFaceColor] = useState("#000000");

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
    setBodyColor(rgbToHex(color_4.r, color_4.g, color_4.b));
    setFaceColor(rgbToHex(color_5.r, color_5.g, color_5.b));
    setfirstGradientBodyColor(rgbToHex(color_6.r, color_6.g, color_6.b));
    setSecondGradientBodyColor(rgbToHex(color_7.r, color_7.g, color_7.b));

    setEyes(getRandomNumber(0, 5))
    setMouth(getRandomNumber(0, 2))
    setHat(getRandomNumber(0, 6))
  };

  return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico"/>

          <title>bongocat.xyz | bongo cat avatar generator</title>
          <meta name="title" content="bongocat.xyz | bongo cat avatar generator"/>
          <meta name="description" content=""/>

          <link rel="canonical" href="https://bongocat.xyz"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://bongocat.xyz"/>
          <meta property="og:title" content="bongocat.xyz | bongo cat avatar generator"/>
          <meta property="og:description" content=""/>

          <meta property="twitter:url" content="https://bongocat.xyz"/>
          <meta property="twitter:title" content="bongocat.xyz | bongo cat avatar generator"/>
          <meta property="twitter:description" content=""/>

          <meta name="keywords" content="
          bongo, cat, bot, maker, edit, make, avatar, awatar, generator,
          "/>
          <meta name="robots" content="index, follow"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="language" content="Polish"/>
          <meta name="revisit-after" content="1 days"/>
        </Head>

        <script src="https://blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/canvg/1.4/rgbcolor.min.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/stackblur-canvas/1.4.1/stackblur.min.js"/>
        <script src="https://cdn.jsdelivr.net/npm/canvg/dist/browser/canvg.min.js"/>

        <main className={styles.main}>
          <div className={styles.avatarAndActions}>
            <Avatar firstGradientBodyColor={firstGradientBodyColor}
                    secondGradientBodyColor={secondGradientBodyColor}
                    firstGradientBackgroundColor={firstGradientBackgroundColor}
                    secondGradientBackgroundColor={secondGradientBackgroundColor}
                    solidBackgroundColor={solidBackgroundColor}
                    colorPicker={colorPicker}
                    bodyColor={bodyColor}
                    faceColor={faceColor}
                    eyes={eyes}
                    mouth={mouth}
                    hat={hat}
            />
            <div className={styles.avatarActions}>
              <button className={styles.secondButton}
                      onClick={() => {
                        setEyes(0)
                        setMouth(0)
                        setHat(0)
                        setSolidBackgroundColor("#000000")
                        setFirstGradientBackgroundColor("#000000")
                        setSecondGradientBackgroundColor("#000000")
                        setBodyColor("#FFFFFF")
                        setFaceColor("#000000")
                        setfirstGradientBodyColor("#FFFFFF")
                        setSecondGradientBodyColor("#FFFFFF")
                      }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M24.285 3H11.73C6.25501 3 3 6.255 3 11.715V24.27C3 29.73 6.255 32.985 11.715 32.985H24.27C29.73 32.985 32.985 29.73 32.985 24.27V11.715C33 6.255 29.745 3 24.285 3Z" fill="#E5E5E5"/>
                  <path d="M25.17 13.605C24.825 13.08 24.12 12.945 23.61 13.29C23.1 13.635 22.95 14.34 23.295 14.85C24 15.9 24.36 17.13 24.36 18.39C24.36 21.9 21.495 24.765 17.985 24.765C14.475 24.765 11.61 21.9 11.61 18.39C11.61 14.88 14.475 12.015 17.985 12.015C18.27 12.015 18.54 12.045 18.825 12.075L18 12.69C17.505 13.05 17.385 13.755 17.76 14.265C17.985 14.565 18.33 14.73 18.675 14.73C18.9 14.73 19.14 14.655 19.335 14.52L22.245 12.39C22.26 12.375 22.26 12.36 22.275 12.36C22.29 12.345 22.305 12.345 22.32 12.33C22.365 12.285 22.395 12.24 22.425 12.195C22.47 12.135 22.53 12.09 22.56 12.015C22.59 11.955 22.605 11.88 22.635 11.82C22.65 11.745 22.68 11.685 22.695 11.61C22.71 11.535 22.695 11.475 22.68 11.4C22.68 11.325 22.68 11.265 22.65 11.19C22.635 11.115 22.59 11.055 22.56 10.98C22.53 10.935 22.53 10.875 22.485 10.815C22.47 10.8 22.455 10.8 22.455 10.785C22.44 10.77 22.44 10.755 22.425 10.74L19.92 7.87504C19.515 7.41004 18.795 7.35004 18.33 7.77004C17.865 8.17504 17.82 8.89504 18.225 9.36004L18.645 9.84004C18.435 9.82504 18.225 9.79504 18 9.79504C13.245 9.79504 9.375 13.665 9.375 18.42C9.375 23.175 13.245 27.045 18 27.045C22.755 27.045 26.625 23.175 26.625 18.42C26.625 16.68 26.13 15.03 25.17 13.605Z" fill="#E5E5E5"/>
                </svg>
              </button>

              <button className={styles.downloadButton}
                      onClick={() => {download()}}>
                Download avatar
              </button>

              <button className={styles.secondButton}
                      onClick={() => {randomAll()}}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.3673 4.3679C7.21365 5.33154 4.125 9.05013 4.125 13.5C4.125 14.1213 3.62132 14.625 3 14.625C2.37868 14.625 1.875 14.1213 1.875 13.5C1.875 7.07368 7.07368 1.875 13.5 1.875C13.9053 1.875 14.2793 2.09302 14.479 2.44571C14.6787 2.79841 14.6732 3.23126 14.4647 3.5788L12.8897 6.2038C12.57 6.73658 11.879 6.90935 11.3462 6.58968C10.8134 6.27002 10.6407 5.57898 10.9603 5.0462L11.3673 4.3679ZM33 21.375C33.6213 21.375 34.125 21.8787 34.125 22.5C34.125 28.9263 28.9263 34.125 22.5 34.125C22.0947 34.125 21.7207 33.907 21.521 33.5543C21.3213 33.2016 21.3268 32.7687 21.5353 32.4212L23.1103 29.7962C23.43 29.2634 24.121 29.0907 24.6538 29.4103C25.1866 29.73 25.3593 30.421 25.0397 30.9538L24.6327 31.6321C28.7863 30.6685 31.875 26.9499 31.875 22.5C31.875 21.8787 32.3787 21.375 33 21.375Z" fill="#E5E7EB"/>
                  <path d="M24.6 12.3149L18.96 9.26994C18.36 8.95494 17.655 8.95494 17.055 9.26994L11.415 12.3149C11.01 12.5399 10.755 12.9749 10.755 13.4699C10.755 13.9649 11.01 14.3999 11.415 14.6249L17.055 17.6699C17.355 17.8349 17.685 17.9099 18.015 17.9099C18.345 17.9099 18.675 17.8349 18.975 17.6699L24.615 14.6249C25.02 14.3999 25.275 13.9649 25.275 13.4699C25.26 12.9749 25.005 12.5399 24.6 12.3149Z" fill="#E5E7EB"/>
                  <path opacity="0.4" d="M16.11 18.7049L10.86 16.0799C10.455 15.8849 9.98999 15.8999 9.59999 16.1399C9.20999 16.3799 8.98499 16.7849 8.98499 17.2349V22.1999C8.98499 23.0549 9.46501 23.8349 10.23 24.2099L15.48 26.8349C15.66 26.9249 15.855 26.9699 16.065 26.9699C16.305 26.9699 16.53 26.9099 16.74 26.7749C17.13 26.5349 17.355 26.1299 17.355 25.6799V20.7149C17.355 19.8599 16.89 19.0949 16.11 18.7049Z" fill="#E5E7EB"/>
                  <path opacity="0.4" d="M26.385 16.1399C25.995 15.8999 25.53 15.8849 25.125 16.0799L19.875 18.7049C19.11 19.0949 18.63 19.8599 18.63 20.7149V25.6799C18.63 26.1299 18.855 26.5349 19.245 26.7749C19.455 26.9099 19.68 26.9699 19.92 26.9699C20.115 26.9699 20.31 26.9249 20.505 26.8349L25.755 24.2099C26.52 23.8199 27 23.0549 27 22.1999V17.2349C27 16.7849 26.775 16.3799 26.385 16.1399Z" fill="#E5E7EB"/>
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.pickerGroup}>
              <div className={styles.pickerButtonGroup}>
                  <button className={edit === 0 ? styles.pickButtonActive : styles.pickButton}
                          onClick={() => {setEdit(0)}}>
                      Background
                  </button>

                  <button className={edit === 1 ? styles.pickButtonActive : styles.pickButton}
                          onClick={() => {setEdit(1)}}>
                      Eyes
                  </button>

                  <button className={edit === 2 ? styles.pickButtonActive : styles.pickButton}
                          onClick={() => {setEdit(2)}}>
                      Mouth
                  </button>

                  <button className={edit === 3 ? styles.pickButtonActive : styles.pickButton}
                          onClick={() => {setEdit(3)}}>
                      Hat
                  </button>
              </div>

              {edit === 0 ? <>
                  <div className={styles.backgroundColorButtons}>
                      <button className={colorPicker === 0 ? styles.pickButtonActive : styles.pickButton}
                              onClick={() => {setColorPicker(0)}}>
                          Solid
                      </button>

                      <button className={colorPicker === 1 ? styles.pickButtonActive : styles.pickButton}
                                  onClick={() => {setColorPicker(1)}}>
                          Gradient
                      </button>
                  </div>

                  {colorPicker === 0 ?
                      <div className={styles.buttonsList}>
                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={bodyColor}
                                     onInput={(event) => setBodyColor(event.target.value)}/>
                              Body
                          </div>

                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={solidBackgroundColor}
                                     onInput={(event) => setSolidBackgroundColor(event.target.value)}/>
                              Background
                          </div>

                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={faceColor}
                                     onInput={(event) => setFaceColor(event.target.value)}/>
                              Face
                          </div>
                      </div>
                      :
                      <div className={styles.buttonsList}>
                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={firstGradientBodyColor}
                                     onInput={(event) => setfirstGradientBodyColor(event.target.value)}/>
                              Body 1
                          </div>

                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={secondGradientBodyColor}
                                     onInput={(event) => setSecondGradientBodyColor(event.target.value)}/>
                              Body 2
                          </div>

                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={firstGradientBackgroundColor}
                                     onInput={(event) => setFirstGradientBackgroundColor(event.target.value)}/>
                              Background 1
                          </div>

                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={secondGradientBackgroundColor}
                                     onInput={(event) => setSecondGradientBackgroundColor(event.target.value)}/>
                              Background 2
                          </div>

                          <div className={styles.modelButton}>
                              <input type="color"
                                     value={faceColor}
                                     onInput={(event) => setFaceColor(event.target.value)}/>
                              Face
                          </div>
                      </div>
                  }
              </> : ""}

              {edit === 1 ?
                  <div className={styles.buttonsList}>
                      <button className={styles.modelButton}
                              onClick={() => {setEyes(0)}}>
                          <AvatarEyes class={eyes === 0 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                      colorPicker={0}
                                      solidBackgroundColor={"#000"}
                                      bodyColor={"#FFF"}
                                      faceColor={"#000"}
                                      eyes={0}/>
                          Default
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setEyes(1)}}>
                          <AvatarEyes class={eyes === 1 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                      colorPicker={0}
                                      solidBackgroundColor={"#000"}
                                      bodyColor={"#FFF"}
                                      faceColor={"#000"}
                                      eyes={1}/>
                          Death
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setEyes(2)}}>
                          <AvatarEyes class={eyes === 2 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                      colorPicker={0}
                                      solidBackgroundColor={"#000"}
                                      bodyColor={"#FFF"}
                                      faceColor={"#000"}
                                      eyes={2}/>
                          Angry
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setEyes(3)}}>
                          <AvatarEyes class={eyes === 3 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                      colorPicker={0}
                                      solidBackgroundColor={"#000"}
                                      bodyColor={"#FFF"}
                                      faceColor={"#000"}
                                      eyes={3}/>
                          Wink
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setEyes(4)}}>
                          <AvatarEyes class={eyes === 4 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                      colorPicker={0}
                                      solidBackgroundColor={"#000"}
                                      bodyColor={"#FFF"}
                                      faceColor={"#000"}
                                      eyes={4}/>
                          Happy
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setEyes(5)}}>
                          <AvatarEyes class={eyes === 5 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                      colorPicker={0}
                                      solidBackgroundColor={"#000"}
                                      bodyColor={"#FFF"}
                                      faceColor={"#000"}
                                      eyes={5}/>
                          Sad
                      </button>
                  </div>: ""}

              {edit === 2 ?
                  <div className={styles.buttonsList}>
                      <button className={styles.modelButton}
                              onClick={() => {setMouth(0)}}>
                          <AvatarMouth class={mouth === 0 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                       colorPicker={0}
                                       solidBackgroundColor={"#000"}
                                       bodyColor={"#FFF"}
                                       mouth={0}/>
                          Default
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setMouth(1)}}>
                          <AvatarMouth class={mouth === 1 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                       colorPicker={0}
                                       solidBackgroundColor={"#000"}
                                       bodyColor={"#FFF"}
                                       faceColor={"#000"}
                                       mouth={1}/>
                          Neutral
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setMouth(2)}}>
                          <AvatarMouth class={mouth === 2 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                       colorPicker={0}
                                       solidBackgroundColor={"#000"}
                                       bodyColor={"#FFF"}
                                       faceColor={"#000"}
                                       mouth={2}/>
                          Sad
                      </button>
                  </div> : ""}

              {edit === 3 ?
                  <div className={styles.buttonsList}>
                      <button className={styles.modelButton}
                              onClick={() => {setHat(0)}}>
                          <AvatarHat class={hat === 0 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={0}/>
                          Default
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setHat(1)}}>
                          <AvatarHat class={hat === 1 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={1}/>
                          Halloween
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setHat(2)}}>
                          <AvatarHat class={hat === 2 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={2}/>
                          Christmas
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setHat(3)}}>
                          <AvatarHat class={hat === 3 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={3}/>
                          Bowler (Small)
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setHat(4)}}>
                          <AvatarHat class={hat === 4 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={4}/>
                          Bowler (Big)
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setHat(5)}}>
                          <AvatarHat class={hat === 5 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={5}/>
                          Party
                      </button>

                      <button className={styles.modelButton}
                              onClick={() => {setHat(6)}}>
                          <AvatarHat class={hat === 6 ? styles.avatarModelButtonActive : styles.avatarModelButton}
                                     colorPicker={0}
                                     solidBackgroundColor={"#000"}
                                     bodyColor={"#FFF"}
                                     hat={6}/>
                          Police
                      </button>
                  </div> : ""}
          </div>
        </main>
      </div>
  )
}
