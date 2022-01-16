import './FooterButtons.scss';

import {Component} from "react";
import Stack from '@mui/material/Stack';
import {Link, Tooltip, Zoom} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightMode';

export class FooterButtons extends Component {
    render() {
        return (
            <Stack spacing={1} direction="row">
                <Tooltip title="Discord server" placement="top" TransitionComponent={Zoom}>
                    <Link href="https://discord.gg/2fjtBMPHuZ" target="_blank">
                        <button className="footer_button">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="#66b2ff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8967 3.97568C16.622 3.39079 15.255 2.95985 13.8258 2.71304C13.7997 2.70828 13.7737 2.72018 13.7603 2.74399C13.5845 3.05668 13.3898 3.46459 13.2534 3.78522C11.7162 3.55507 10.1868 3.55507 8.68111 3.78522C8.54473 3.45745 8.34292 3.05668 8.16633 2.74399C8.15293 2.72098 8.12692 2.70907 8.1009 2.71304C6.67245 2.95906 5.30548 3.38999 4.02996 3.97568C4.01893 3.98044 4.00947 3.98838 4.00316 3.9987C1.41034 7.87234 0.700059 11.6507 1.0485 15.3823C1.05008 15.4006 1.06033 15.418 1.07452 15.4291C2.78519 16.6854 4.44226 17.4481 6.06859 17.9536C6.0946 17.9616 6.12219 17.9521 6.13875 17.9306C6.52345 17.4053 6.86638 16.8513 7.16042 16.2688C7.17777 16.2347 7.16121 16.1942 7.12574 16.1807C6.58179 15.9744 6.06386 15.7228 5.56563 15.4371C5.52622 15.4141 5.52306 15.3577 5.55933 15.3307C5.66417 15.2522 5.76902 15.1704 5.86914 15.0879C5.88727 15.0728 5.9125 15.0696 5.93378 15.0792C9.20693 16.5735 12.7505 16.5735 15.985 15.0792C16.0063 15.0688 16.0315 15.072 16.0504 15.0871C16.1505 15.1696 16.2554 15.2522 16.361 15.3307C16.3973 15.3577 16.3949 15.4141 16.3555 15.4371C15.8573 15.7283 15.3393 15.9744 14.7946 16.1799C14.7591 16.1934 14.7434 16.2347 14.7607 16.2688C15.0611 16.8505 15.404 17.4045 15.7816 17.9298C15.7974 17.9521 15.8257 17.9616 15.8518 17.9536C17.486 17.4481 19.143 16.6854 20.8537 15.4291C20.8687 15.418 20.8782 15.4014 20.8797 15.3831C21.2968 11.069 20.1813 7.32157 17.9227 3.99949C17.9172 3.98838 17.9077 3.98044 17.8967 3.97568ZM7.64919 13.1102C6.66378 13.1102 5.8518 12.2055 5.8518 11.0944C5.8518 9.98336 6.64801 9.07863 7.64919 9.07863C8.65825 9.07863 9.46235 9.99129 9.44658 11.0944C9.44658 12.2055 8.65037 13.1102 7.64919 13.1102ZM14.2948 13.1102C13.3094 13.1102 12.4974 12.2055 12.4974 11.0944C12.4974 9.98336 13.2936 9.07863 14.2948 9.07863C15.3039 9.07863 16.108 9.99129 16.0922 11.0944C16.0922 12.2055 15.3039 13.1102 14.2948 13.1102Z"/>
                            </svg>
                        </button>
                    </Link>
                </Tooltip>

                <Tooltip title="GitHub repository" placement="top" TransitionComponent={Zoom}>
                    <Link href="https://github.com/arwwat/bongocat.xyz" target="_blank">
                        <button className="footer_button"><GitHubIcon fontSize="small"/></button>
                    </Link>
                </Tooltip>

                <Tooltip title="Change language (WIP)" placement="top" TransitionComponent={Zoom}>
                    <button className="footer_button" disabled>
                        <TranslateRoundedIcon fontSize="small"/>
                    </button>
                </Tooltip>

                <Tooltip title="Switch theme" placement="top" TransitionComponent={Zoom}>
                    <button className="footer_button" disabled>
                        <DarkModeRoundedIcon id="dark_mode" style={{ display: "none" }} fontSize="small"/>
                        <LightModeRoundedIcon id="light_mode" fontSize="small"/>
                    </button>
                </Tooltip>
            </Stack>
        )
    }
}