const app = (function () {

    // API
    public = {};

    const canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        img = document.getElementById('img');

    const canvasReconstructionImage = document.createElement('canvas'),
        contextReconstruction = canvasReconstructionImage.getContext('2d');
    const div = document.createElement("div")
    div.id = "div"

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);

    const imageData = context.getImageData( 0, 0, img.width, img.height );

    // public.getImgData = () => {
    //     return context.getImageData(0, 0, canvas.width, canvas.height);
    // };

    // // console.log (img.width, img.height)
    // // console.log (canvas.width, canvas.height)

    // //Reconstrucción de la imagen

    // public.reconstruction = () => {
        // const imageData = app.getImgData(),
           pixels = imageData.data,
            numPixels = imageData.width * imageData.height;

            console.log(pixels)
            console.log(numPixels)

        // for (let i = 0; i < numPixels; i += 4) {
            
        //     const r = pixels[i];
        //     const g = pixels[i + 1];
        //     const b = pixels[i + 2];
        //     const a = pixels[i + 3];

        //     // pixels[i] = r;
        //     // pixels[i + 1] = g;
        //     // pixels[i + 2] = b;
        //     // pixels[i + 3] = b;

        //     const x = canvas.width;
        //     const y = canvas.height;
        //     const off = (y * imageData.width + x) * 4;

        //     pixels[off] = r;
        //     pixels[off + 1] = g;
        //     pixels[off + 2] = b;
        //     pixels[off + 3] = 255;

        // }

        // context.putImageData(imageData, 300, 300);

       
    // };

    public.sepia = function () {
        // var imageData = app.getImgData(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height;

        for ( var i = 0; i < numPixels; i++ ) {
            var r = pixels[ i * 4 ];
            var g = pixels[ i * 4 + 1 ];
            var b = pixels[ i * 4 + 2 ];

            pixels[ i * 4 ] = 255 - r;
            pixels[ i * 4 + 1 ] = 255 - g;
            pixels[ i * 4 + 2 ] = 255 - b;

            pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
            pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
            pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
        }

        contextReconstruction.putImageData( imageData, 0, 0 );
    };

    public.save = function () {
        var link = window.document.createElement( 'a' ),
            url = canvas.toDataURL(),
            filename = 'imgReconstruida.jpg';

        link.setAttribute( 'href', url );
        link.setAttribute( 'download', filename );
        link.style.visibility = 'hidden';
        window.document.body.appendChild( link );
        link.click();
        window.document.body.removeChild( link );
    };
    
    return public;
}());

app.sepia();
app.save();
// app.contrast()
// app.reconstruction()
// console.log(app.reconstruction());
// console.log(app.getImgData().data.length);
// console.log(app.getImgData().data);
