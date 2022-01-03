export function download() {
    const svg = document.querySelector('svg');
    const data = (new XMLSerializer()).serializeToString(svg);
    const canvas = document.createElement('canvas');
    canvg(canvas, data, {
        renderCallback: function () {
            canvas.toBlob(function (blob) {
                console.log(window.URL.createObjectURL(blob));
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(blob, "bongo cat avatar.png");
                }
                else {
                    const elem = window.document.createElement('a');
                    elem.href = window.URL.createObjectURL(blob);
                    elem.download = "bongo cat avatar.png";
                    document.body.appendChild(elem);
                    elem.click();
                    document.body.removeChild(elem);
                }
            });
        }
    });
}