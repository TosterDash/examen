var piezaNum;







function ejecutar(){
    /*
    clear()

    piezaNum = document.getElementById("number").value;
    piezaNum = parseInt(piezaNum)

    let radio = 100
    let grados = 360/piezaNum;
    let puntoY = 300

    let P1X = 200;
   

    let P2X = 600
    

    let P3X = 900

    circle(P1X,puntoY, 200)
    circle(P2X,puntoY,200)
    circle(P3X,puntoY,200)
    
    

    

    var gradosDivididos = grados;

    while(grados<=360){
        let x = radio * Math.cos(grados * Math.PI/180); 
        let y = radio * Math.sin(grados * Math.PI/180);
        let yAll = puntoY + y

        let xPuntoPP = P1X + x;
        let xDDA = P2X + x;
        let xBersenham = P3X + x;

        xPuntoPP = floor(xPuntoPP)
        yAll = floor(yAll)
        
        puntoPP(P1X,puntoY,xPuntoPP,yAll)
        DDA(P2X, puntoY, xDDA, yAll)
        Bresenham(P3X,puntoY,xBersenham,yAll)
         
        grados += gradosDivididos;

    }
    */

    
    clear()
    piezaNum = document.getElementById("number").value;
    piezaNum = parseInt(piezaNum)

    let radio = 100
    let grados = 360/piezaNum;

    let P1X = 300;

    let P2X = 600
    
    let P3X = 900

    let puntoY = 200
    

    circle(P1X,puntoY, 200)
    circle(P2X,puntoY,200)
    circle(P3X,puntoY,200)

    var gradosDivididos = grados;

    while(grados<=360){
        let x = radio * Math.cos(grados * Math.PI/180); 
        let y = radio * Math.sin(grados * Math.PI/180);


        let xBersenham = P3X + x;

        let xDDA = P2X + x;

        let xPuntoPP = P1X + x;
        let y2 = puntoY +y;

        xPuntoPP = floor(xPuntoPP)
        y2 = floor(y2)
        
        puntoPP(P1X,puntoY,xPuntoPP,y2)
        DDA(P2X, puntoY, xDDA, y2)
        Bresenham(P3X,puntoY,xBersenham,y2)
         
        grados += gradosDivididos;

    }


    

}





function setup() 
{
   createCanvas(windowWidth, windowHeight)
   MW = windowWidth/2;
   MH = windowHeight/2
}

function draw()
{
     console.log(piezaNum);
     noLoop()
}

function puntoPP(x1,y1,x2,y2){


    if(x2<x1)
    {
        let aux=x2;
        x2=x1;
        x1=aux

        aux = y2
        y2=y1
        y1=aux
    }

    var py = y2 - y1;
    var px = x2 - x1;
    var m = py / px;
    var b = y1 - (m * x1);

    
    point( x1, y1 )

    if(x1===x2){
    
        if(y1>y2)
        {
            let aux=y1;
            y1=y2;
            y2=aux
        }
        let y = y1 + 1
        while(y!=y2)
        {
            point(x1,y)
            y++
        }
    }
    else{
        let x = x1+ 1
        let y = m * x + b
        
        while(x !=x2){
            y = m * x + b
            y = floor(y)
            point(x, y)
            x++
        }
  }
  
  

    

}




function DDA(x1,y1,x2,y2){

    let lim
    let xi
    let yi
    
    let x
    let y

    const dx = x2 - x1
    const dy = y2 - y1
    if(Math.abs(dx) > Math.abs(dy)){
        lim = Math.abs(dx)
    }else{
        lim = Math.abs(dy)
    }

    xi = dx/lim
    yi = dy/lim
    x = x1
    y = y1

    let i = 0

    while(i < lim){
        point(x,y)
        x += xi
        y += yi 

        i++
    }

}




function Bresenham(x1, y1, x2, y2) {
  let lim
  let dx=x2-x1
  let dy=y2-y1

  
  if(Math.abs(dx)>Math.abs(dy))
    lim=Math.abs(dx)
  else
    lim=Math.abs(dy)

  let xi=dx/lim
  let yi=dy/lim
  let x=x1
  let y= y1
  
  for(let i=0;i<lim;i++)
  {
    point(x, y)
    x+=xi
    y+=yi
  }



}
  







