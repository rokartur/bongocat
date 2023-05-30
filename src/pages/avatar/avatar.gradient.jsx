const Gradient = ({ firstBodyColor, secondBodyColor, firstBackgroundColor, secondBackgroundColor }) => {
    return (
        <defs>
            <linearGradient id="gradient_body" x1="0" y1="0" x2="1" y2="1">
                <stop id="first" stopColor={firstBodyColor} offset="0%"/>
                <stop id="second" stopColor={secondBodyColor} offset="100%"/>
            </linearGradient>

            <linearGradient id="gradient_background" x1="0" y1="0" x2="1" y2="1">
                <stop id="first" stopColor={firstBackgroundColor} offset="0%"/>
                <stop id="second" stopColor={secondBackgroundColor} offset="100%"/>
            </linearGradient>
        </defs>
    );
}

export default Gradient;
