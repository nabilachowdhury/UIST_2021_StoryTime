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
  
async function move_ahead(left_motor_speed, right_motor_speed, duration){
    connectedCube.move(left_motor_speed,right_motor_speed,duration);
}
  
async function move_backwards(left_motor_speed, right_motor_speed, duration){
    connectedCube.move(-left_motor_speed,-right_motor_speed,duration);
}
  
async function rotate_left(left_motor_speed, right_motor_speed, duration){
    connectedCube.move(-left_motor_speed, right_motor_speed, duration);
}
  
async function rotate_right(left_motor_speed, right_motor_speed, duration){
    connectedCube.move(left_motor_speed, -right_motor_speed, duration);
}

async function turnLightOnRGB(r,g,b,duration){
  connectedCube.turnLightOnRGB(r,g,b,duration);
}
  
  function getToioConnection(){
    connectedCube = P5tCube.connectNewP5tCube();
    console.log(connectedCube);
    return connectedCube;
  }
  
  async function checkKey(e){
    e = e || window.event;
  
    if(e.keyCode == '67'){
      //c
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
      ls = 8;
      rs = 8;
      time = 95;
      rotate_left(ls,rs,time);
      //connectedCube.move(-8,8,95);
    }
    else if(e.keyCode == '39'){
      //right arrow
      // P5tCube.connectNewP5tCube().then(
      //   cube => {
      //     cube.rotate(8,95); //rotate clockwise 90
          
    //     }
    //   );
    //connectedCube.rotate(8,95);
      ls = 8;
      rs = 8;
      time = 95;
      rotate_right(ls,rs,time)
    }
    else if(e.keyCode == '65'){
      move_ahead(50,50,4000)
      await (rotate_left(8,8,95))
      await then(move_ahead(8,8,500));
  
    }
    
  }
  
  
  