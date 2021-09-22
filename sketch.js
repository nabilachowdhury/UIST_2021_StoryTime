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

async function checkKey(e){
  e = e || window.event;

  if(e.keyCode == '67'){
    console.log("Waiting for the connection to be established");
    connectedCube = await getToioConnection();
    connectedCube.turnLightOnRGB(0,255,0,2000);
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
    connectedCube.move(-8,-8,500)
    

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

  else if(e.keyCode == '65'){
    connectedCube.move(10,10,2000);
    connectedCube.rotate(-8,95);
    connectedCube.move(8,8,500)

  }
  
}