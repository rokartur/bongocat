const Background = ({ colorPicker, solidBackgroundColor }) => {
    return (
        <rect id="background"
              width="1024"
              height="1024"
              fill={colorPicker ? solidBackgroundColor : "url(#gradient_background)"}
        />
    );
}

export default Background;
