var canvas=new fabric.Canvas('lienso');
function fondo(){
    fabric.Image.fromURL('cumple.jpg', function(Img){
        fondo_globos = Img;
fondo_globos.scaleToWidth(800);
fondo_globos.scaleToHeight(600);
canvas.add(fondo_globos);
    });
}