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

function turnLightOnRGB(r,g,b,duration) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        connectedCube.turnLightOnRGB(r,g,b,duration);
        resolve(true)
      }, duration)
  })
}


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
    //c
    console.log("Waiting for the connection to be established");
    connectedCube = await getToioConnection();
  }

  if(e.keyCode == '70'){ //f
    console.log("Waiting for the connection to be established");
    connectedCube2 = await getToioConnection2();
    connectedCube2.turnLightOnRGB(200,0,0,0);
  }
  else if(e.keyCode == '38'){
    //up arrow
    connectedCube.move(8,8,500);
  }
  else if(e.keyCode =='40'){
    //down arrow
    connectedCube.move(-8,-8,500);
    }
  else if(e.keyCode =='37'){
    connectedCube.move(-8,8,95); // rotate anti-clockwise
  }
  else if(e.keyCode == '39'){
    
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
  else if(e.keyCode == '76'){ //L for 15 sec with orange and red warning 3 times
      await turnLightOnRGB(0,255,0,2500);
      await turnLightOnRGB(0,255,0,2500);
      await turnLightOnRGB(0,255,0,2500);
      await turnLightOnRGB(0,255,0,2500);
      await turnLightOnRGB(255,100,0,1500);
      await turnLightOnRGB(255,100,0,1500);
      await turnLightOnRGB(255,0,0,1500);
      await turnLightOnRGB(255,0,0,1500);


  }

  else if(e.keyCode =='75'){ //k optional to play sound after each story session
    // connectedCube2.playSingleNote(100,250);
    connectedCube2.playSE(6);
  }

  
}


