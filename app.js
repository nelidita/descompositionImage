const app = (function () {

    // API
    public = {};

    const canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        img = document.getElementById('img');

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);

    const imageData = context.getImageData( 0, 0, img.width, img.height );

    //Reconstrucción de la imagen
    public.reconstruction = () => {
           const pixels = imageData.data;
        const numPixels = imageData.width * imageData.height;

            console.log(pixels)
            console.log(numPixels)

        for (let i = 0; i < numPixels * 4; i += 4) {
            
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            
            pixels[i] = r;
            pixels[i + 1] = g;
            pixels[i + 2] = b;
            
            const container = document.getElementById("container");
            const div = document.createElement("div")
            div.className = "divPixel"
            container.appendChild(div);
            container.style.width = imageData.width + "px";
            container.style.height = imageData.height + "px";

            div.style.backgroundColor = "rgb("+r+","+g+","+b+")"
            
            console.log(div.length)
        }

        context.putImageData(imageData, 0, 0);
    };

    // public.save = function () {
    //     var link = window.document.createElement( 'a' ),
    //         url = canvas.toDataURL(),
    //         filename = 'imgReconstruida.jpg';

    //     link.setAttribute( 'href', url );
    //     link.setAttribute( 'download', filename );
    //     link.style.visibility = 'hidden';
    //     window.document.body.appendChild( link );
    //     link.click();
    //     window.document.body.removeChild( link );
    // };
    
    return public;
}());

app.reconstruction();
// app.save();