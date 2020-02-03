function drawRotated(rad,posX,posY){
    contexto1.clearRect(0,0,lienzo1.width,lienzo1.height);

    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    contexto1.save();

    // move to the center of the canvas
    //contexto1.translate(lienzo1.width/2,lienzo1.height/2);
    contexto1.translate(posX,posY);

    // rotate the canvas to the specified degrees
    contexto1.rotate(rad);

    // draw the image
    // since the context is rotated, the image will be rotated also
    //contexto1.drawImage(imagenCoche,-imagenCoche.width/2+posX,-imagenCoche.width/2+posY,32,32);
    //contexto1.drawImage(imagenCoche,-imagenCoche.width/2,-imagenCoche.height/2);
    contexto1.drawImage(imagenCoche,-28,-imagenCoche.height/2);
    
    // we’re done with the rotating so restore the unrotated context
    contexto1.restore();
}