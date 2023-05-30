import styles from "../styles/home.module.scss";

import {useEffect} from "react";
import {gsap} from "gsap";
import useLocalStorage from "use-local-storage";

import video from "../assets/video/bongocat.mp4";

const Home = () => {
    const [siteVisited, setSiteVisited] = useLocalStorage("siteVisited", false, { syncData: true })

    useEffect(() => {
        if (!siteVisited) {
            gsap.fromTo(
                "#loading-alert",
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                    delay: 6,
                    duration: .6,
                    ease: "back",
                });

            gsap.fromTo(
                "#cat-video",
                {
                    opacity: 0,
                    scale: .5
                },
                {
                    opacity: 1,
                    scale: 1,
                    delay: 7.5,
                    duration: .4,
                    ease: "back",
                });

            gsap.fromTo(
                "#generate-button",
                {
                    opacity: 0,
                    scale: .5
                },
                {
                    opacity: 1,
                    scale: 1,
                    delay: 8,
                    duration: .4,
                    ease: "back",
                });
            setSiteVisited(true)
        }
    }, []);

    return (
        <>
            <main className={styles.container}>
                <p id={"loading-alert"} className={styles.mainLoadingAlert}>
                    LOADING...
                </p>

                <video id={"cat-video"}
                       className={styles.video}
                       controls={false}
                       preload={"auto"}
                       autoPlay={true}
                       loop={true}
                       muted={true}
                       playsInline={true}>
                    <source src={video} type="video/mp4"/>
                </video>

                <a id={"generate-button"} className={styles.mainButton} href={"/generate"}>
                    create avatar
                </a>
            </main>
        </>
    );
}

export default Home;
