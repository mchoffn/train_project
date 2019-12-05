class Trainmoving2 {



constructor () {

         this.trainPosition2 = document.querySelector('#trainPosition2');
         this.message2 = document.querySelector("#msg2");
         this.startBtn = document.querySelector('.start-train');
         this.resetBtn = document.querySelector('.reset-train');
         this.startTrain();
         this.stopTrain();
         this.flag1 = false;
         this.flag2 = false;
         this.flag3 = false;
         this.flag4 = false;
         this.flag5 = false;
}

startTrain() {
    this.startBtn.addEventListener("click", () => {
        
        this.trainMovement(true)
    })
}

stopTrain() {
   this.resetBtn.addEventListener("click", () => {
      this.trainMovement(false)
   })
}

trainMovement(ride) {

    let y = this.trainPosition2.offsetTop;
    let x = this.trainPosition2.offsetLeft;
    this.message = "X: " + x + " Y : " + y

    if (ride) {
        this.myTime = setInterval(() => {
            this.speedAndDistance()
        }, 100);
    } else {
        clearInterval(this.myTime)
        this.trainPosition2.style.left = "1020px";
        this.trainPosition2.style.top = "190px";
    }
}

speedAndDistance() {

        
        
    let y = this.trainPosition2.offsetTop;
    let x = this.trainPosition2.offsetLeft;

    // movement 1
    if ( y > 75 && this.flag1 == false ) {
        console.log(` Train 2 (1) moving: coords y: ${y} coords x: ${x} `)
        y = y - 6;
        x = x - 5;
        this.trainPosition2.style.top = y + "px"; 
        this.trainPosition2.style.left = x + "px";


        if(x == 925){
            this.flag2 = true;
            this.flag1 = true;
            console.log("tog nummer 2 flag 2 enabled og flag 1 enabled");
        }

     }
      
     // movement 2
    if ( x > 690 && this.flag2 == true ){
        y = y + 4
        x = x - 5
        console.log(` Train2 (2) coords y: ${y} coords x: ${x} `)
        this.trainPosition2.style.top = y + "px"; 
        this.trainPosition2.style.left = x + "px"; 
    

        if ( x == 690) {
        this.flag3 = true;
        console.log("tog nummer 2 flag 3 enabled")
        }
    }

    //movement 3
    if ( x > 460 && this.flag3 == true ) {
        x = x - 10;
        console.log(` Train 2 (3) coords y: ${y} coords x: ${x} `)
        this.trainPosition2.style.top = y + "px"; 
        this.trainPosition2.style.left = x + "px";

        if ( x == 460) {
            this.flag1 = true;
            this.flag2 = false;
            this.flag3 = false;
            this.flag4 = true;
            console.log("flag 1 true, 2 false og 3 false og flag 4 true")
        }

    }

    //movement 4
    if ( y > 50 && this.flag4 == true){
        y =  y - 10
        this.trainPosition2.style.top = y + "px"; 
        this.trainPosition2.style.left = x + "px";
        console.log("train 2 movement 4 enabled")
    }




}
}



export default Trainmoving2