function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function mouseClicked() {
  P5tCube.connectNewP5tCube().then( cube => {
    cube.turnLightOn( 'blue' );
  } );
}

document.onkeydown = checkKey;

connectedCube = null

function getToioConnection(){
  connectedCube = P5tCube.connectNewP5tCube();
  console.log(connectedCube);
  return connectedCube;
}

function getToioConnection2(){
  connectedCube2 = P5tCube.connectNewP5tCube();
  console.log(connectedCube2);
  return connectedCube2;
}

async function checkKey(e){
  e = e || window.event;

  if(e.keyCode == '67'){
    console.log("Waiting for the connection to be established");
    connectedCube = await getToioConnection();
    connectedCube.turnLightOnRGB(0,255,0,2000);
  }

  if(e.keyCode == '70'){
    console.log("Waiting for the connection to be established");
    connectedCube2 = await getToioConnection2();
    connectedCube2.turnLightOnRGB(255,0,0,2000);
  }
  else if(e.keyCode == '38'){
    //up arrow
    connectedCube.move(8,8,500);

    
    // P5tCube.connectNewP5tCube().then(
    //   cube => {
    //     console.log(cube);
    //     cube.move(8,8,500); // block to block distance front.
    //   }
    // );
  }
  else if(e.keyCode =='40'){
    //down arrow
    connectedCube.move(-8,-8,500);
    

  }
  else if(e.keyCode =='37'){
    //left arrow
    // P5tCube.connectNewP5tCube().then(
    //   cube => {
    //     //cube.rotate(-8,95); //rotate anticlockwise 90
    //     cube.move(-8,8,95);
    //   }
    // );

    connectedCube.move(-8,8,95);
  }
  else if(e.keyCode == '39'){
    //right arrow
    // P5tCube.connectNewP5tCube().then(
    //   cube => {
    //     cube.rotate(8,95); //rotate clockwise 90
        
  //     }
  //   );
  connectedCube.rotate(8,95);

  }
  else if (e.keyCode == '87'){
        //w key
        connectedCube2.move(8,8,500);
  }
  else if (e.keyCode == '83'){
        //s key 
        connectedCube2.move(-8,-8,500);
  }
  else if (e.keyCode == '65'){
        //a key
        connectedCube2.move(-8,8,95);
  }
  else if (e.keyCode == '68')
  {
        //d key 
        connectedCube2.rotate(8,95);
  }

  else if (e.keyCode == '80'){
        var xPos = connectedCube.sensorX;
        var yPos = connectedCube.sensorY;
        connectedCube2.moveTo({
  x: xPos,
  y: yPos,
  angle: -Math.PI / 2,
  angleType: 0
}, 80);
  }

 /* else if(e.keyCode == '65'){
    connectedCube.move(10,10,2000);
    connectedCube.rotate(-8,95);
    connectedCube.move(8,8,500)

  }*/
  
}