const Eyes = ({ eyes, solidFaceColor }) => {
    return (
        <>
            {eyes === 0 &&
                <>
                    <circle cx="395" cy="486" r="13" fill={solidFaceColor}/>
                    <circle cx="556" cy="537" r="13" fill={solidFaceColor}/>
                </>
            }

            {eyes === 1 &&
                <>
                    <path d="M552.415 520.45C551.618 518.689 549.544 517.908 547.783 518.705C546.022 519.503 545.241 521.576 546.038 523.337L552.415 520.45ZM559.826 553.79C560.623 555.551 562.697 556.332 564.458 555.535C566.219 554.738 567 552.664 566.203 550.903L559.826 553.79ZM572.79 533.415C574.551 532.618 575.332 530.544 574.535 528.783C573.738 527.022 571.664 526.241 569.903 527.038L572.79 533.415ZM539.45 540.826C537.689 541.623 536.908 543.697 537.705 545.458C538.503 547.219 540.576 548 542.337 547.203L539.45 540.826ZM546.038 523.337L559.826 553.79L566.203 550.903L552.415 520.45L546.038 523.337ZM569.903 527.038L539.45 540.826L542.337 547.203L572.79 533.415L569.903 527.038Z"
                          fill={solidFaceColor}/>
                    <path d="M391.295 469.976C390.497 468.215 388.424 467.434 386.663 468.231C384.902 469.029 384.12 471.103 384.918 472.863L391.295 469.976ZM398.705 503.316C399.503 505.077 401.576 505.859 403.337 505.061C405.098 504.264 405.879 502.19 405.082 500.429L398.705 503.316ZM411.67 482.941C413.431 482.144 414.212 480.07 413.415 478.309C412.618 476.548 410.544 475.767 408.783 476.564L411.67 482.941ZM378.33 490.352C376.569 491.149 375.788 493.223 376.585 494.984C377.382 496.745 379.456 497.526 381.217 496.729L378.33 490.352ZM384.918 472.863L398.705 503.316L405.082 500.429L391.295 469.976L384.918 472.863ZM408.783 476.564L378.33 490.352L381.217 496.729L411.67 482.941L408.783 476.564Z"
                          fill={solidFaceColor}/>
                </>
            }

            {eyes === 2 &&
                <>
                    <path d="M403 444.994C411.646 444.951 427.287 461.457 426.761 473.219"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                    <path d="M573.408 501.073C566.056 496.523 544.098 502.433 538.406 512.74"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                    <circle cx="395" cy="486" r="13" fill={solidFaceColor}/>
                    <circle cx="556" cy="537" r="13" fill={solidFaceColor}/>
                </>
            }

            {eyes === 3 &&
                <>
                    <circle cx="395" cy="486" r="13"
                            fill={solidFaceColor}/>
                    <path d="M561.583 540.021C558.747 531.835 537.976 522.547 527.059 526.963"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                </>
            }

            {eyes === 4 &&
                <>
                    <path d="M561.583 534.021C558.747 525.835 537.976 516.547 527.059 520.963"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                    <path d="M402.583 483.021C399.747 474.835 378.976 465.547 368.059 469.963"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                </>
            }

            {eyes === 5 &&
                <>
                    <path d="M417 462.596C430.003 467.07 435.953 465.672 444.5 457.096"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                    <path d="M556.111 507.064C542.827 503.511 538.672 499.028 536.374 487.14"
                          stroke={solidFaceColor}
                          strokeWidth="9"
                          strokeLinecap="round"/>
                    <circle cx="395" cy="486" r="13"
                            fill={solidFaceColor}/>
                    <circle cx="556" cy="537" r="13"
                            fill={solidFaceColor}/>
                </>
            }
        </>
    );
}

export default Eyes;
