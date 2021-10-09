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
var player1 = true;
var story = false;

connectedCube = null

function turnLightOnRGB(r,g,b,duration) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        connectedCube.turnLightOnRGB(r,g,b,duration);
        resolve(true)
      }, duration)
  })
}

function turnLightOnPlayer1(duration) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        connectedCube.turnLightOnRGB(0,255,0,duration);
        connectedCube2.turnLightOnRGB(0,255,0,duration);
        connectedCube3.turnLightOnRGB(255,0,0,duration );
        connectedCube4.turnLightOnRGB(255,0,0,duration );
        resolve(true)
      }, duration)
  })
}

function turnLightOnPlayer2(duration) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        connectedCube3.turnLightOnRGB(0,255,0,duration);
        connectedCube4.turnLightOnRGB(0,255,0,duration);
        connectedCube.turnLightOnRGB(255,0,0,duration );
        connectedCube2.turnLightOnRGB(255,0,0,duration );
        resolve(true)
      }, duration)
  })
}

function turnLightOnOrangePlayer1(duration) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        connectedCube.turnLightOnRGB(255,100,0,duration);
        connectedCube2.turnLightOnRGB(255,100,0, duration);
        connectedCube3.turnLightOnRGB(255,0,0,duration );
        connectedCube4.turnLightOnRGB(255,0,0,duration );
        resolve(true)
      }, duration)
  })
}

function turnLightOnOrangePlayer2(duration) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        connectedCube.turnLightOnRGB(255,100,0,duration);
        connectedCube2.turnLightOnRGB(255,100,0, duration);
        connectedCube3.turnLightOnRGB(255,0,0,duration );
        connectedCube4.turnLightOnRGB(255,0,0,duration );
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

function getToioConnection3(){
  connectedCube3 = P5tCube.connectNewP5tCube();
  console.log(connectedCube3);
  return connectedCube3;
}

function getToioConnection4(){
  connectedCube4 = P5tCube.connectNewP5tCube();
  console.log(connectedCube4);
  return connectedCube4;
}

function movePlayer2Toios(){
  var xPos1 = connectedCube.sensorX;
  var yPos1 = connectedCube.sensorY;
  var xPos2 = connectedCube2.sensorX;
  var yPos2 = connectedCube2.sensorY;
  connectedCube3.moveTo({
                                x: xPos1,
                                y: yPos1,
                                angle: -Math.PI / 2,
                                angleType: 0
                              }, 80);
  connectedCube4.moveTo({
                                x: xPos2,
                                y: yPos2,
                                angle: -Math.PI / 2,
                                angleType: 0
                              }, 80);
}

function movePlayer1Toios(){
  var xPos3 = connectedCube3.sensorX;
  var yPos3 = connectedCube3.sensorY;
  var xPos4 = connectedCube4.sensorX;
  var yPos4 = connectedCube2.sensorY;
  connectedCube.moveTo({
                                x: xPos3,
                                y: yPos3,
                                angle: -Math.PI / 2,
                                angleType: 0
                              }, 80);
  connectedCube2.moveTo({
                                x: xPos4,
                                y: yPos4,
                                angle: -Math.PI / 2,
                                angleType: 0
                              }, 80);
}

async function checkKey(e){
  e = e || window.event;

  if(e.keyCode == '49'){
    //1
    console.log("Waiting for the connection to be established");
    connectedCube = await getToioConnection();
    connectedCube.turnLightOnRGB(200,0,0,0);
  }

  if(e.keyCode == '50'){ //2
    console.log("Waiting for the connection to be established");
    connectedCube2 = await getToioConnection2();
    connectedCube2.turnLightOnRGB(200,0,0,0);
  }

  if(e.keyCode == '51'){ //3
    console.log("Waiting for the connection to be established");
    connectedCube3 = await getToioConnection3();
    connectedCube3.turnLightOnRGB(200,0,0,0);
  }
  if(e.keyCode == '52'){ //3
    console.log("Waiting for the connection to be established");
    connectedCube4 = await getToioConnection4();
    connectedCube4.turnLightOnRGB(200,0,0,0);
  }

  else if(e.keyCode == '38'){
    //up arrow
    if(player1){
      connectedCube.move(8,8,500);
    }else{
      connectedCube3.move(8,8,500);
    }
    
  }
  else if(e.keyCode =='40'){
    //down arrow
    if(player1){
      connectedCube.move(-8,-8,500);
    } else {
      connectedCube3.move(-8,-8,500);
    }
    
    }
  else if(e.keyCode =='37'){
    if(player1){
      connectedCube.move(-8,8,95); // rotate anti-clockwise
    } else{
      connectedCube3.move(-8,8,95); // rotate anti-clockwise
    }
    
  }
  else if(e.keyCode == '39'){
    if(player1){
      connectedCube.rotate(8,95);
    }else{
      connectedCube3.rotate(8,95);
    }
    
  }
  else if (e.keyCode == '87'){
        //w key
        if(player1){
          connectedCube2.move(8,8,500);
        }else{
          connectedCube4.move(8,8,500);
        }
        
  }
  else if (e.keyCode == '83'){
        //s key 
        if (player1){
          connectedCube2.move(-8,-8,500);
        }else{
          connectedCube4.move(-8,-8,500);
        }
  }
  else if (e.keyCode == '65'){
        //a key
        if(player1){
          connectedCube2.move(-8,8,95);
        } else{
          connectedCube4.move(-8,8,95);
        }
  }
  else if (e.keyCode == '68')
  {
        //d key 
        if(player1){
          connectedCube2.rotate(8,95);
        }else{
          connectedCube4.rotate(8,95);
        }
  }

  else if (e.keyCode == '85'){
    story = false;
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
    story = true;
    while (story){
      
      if(i>0){
        await turnLightOnPlayer1(250);
        movePlayer1Toios();
      }
    
      player1 = true;
      await turnLightOnPlayer1(2500);
      await turnLightOnPlayer1(2500);
      await turnLightOnPlayer1(2500);
      await turnLightOnPlayer1(2500);
      await turnLightOnOrangePlayer1(1500);
      await turnLightOnOrangePlayer1(1500);
      
      await turnLightOnPlayer2(100);
      movePlayer2Toios();
      player1 = false;
      await turnLightOnPlayer2(2500);
      await turnLightOnPlayer2(2500);
      await turnLightOnPlayer2(2500);
      await turnLightOnPlayer2(2500);
      await turnLightOnOrangePlayer2(1500);
      await turnLightOnOrangePlayer2(1500);
    }  
    
   


  }
  else if (e.keyCode == '222'){//'
      await turnLightOnRGB(0,255,0,1500);
      await turnLightOnRGB(0,255,0,1500);
      await turnLightOnRGB(0,255,0,1500);
      await turnLightOnRGB(0,255,0,1500);
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


