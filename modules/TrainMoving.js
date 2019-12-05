class TrainMoving {

     constructor() {
         console.log("hello")
         this.trainPosition = document.querySelector('#trainPosition');
         this.message = document.querySelector("#msg");
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

         let y = this.trainPosition.offsetTop;
         let x = this.trainPosition.offsetLeft;
         this.message = "X: " + x + " Y : " + y

         if (ride) {
             this.myTime = setInterval(() => {
                 this.speedAndDistance()
             }, 100);
         } else {
             clearInterval(this.myTime)
             this.trainPosition.style.left = "935px";
             this.trainPosition.style.top = "230px";
         }
     }

     speedAndDistance() {

        
        
        let y = this.trainPosition.offsetTop;
        let x = this.trainPosition.offsetLeft;



        // movement 1
        if (y < 470 && this.flag1 == false) {
            console.log(` 1 coords y: ${y} coords x: ${x} `)

            if(y == 460){
                this.flag1 = true;
            }
            y = y + 10;
            this.trainPosition.style.top = y + "px"; // vertical movement

          
        }  
            // movement 2
        if ( y > 280 && this.flag1 == true){
            y = y -9
            x = x -10
            console.log(` 2 coords y: ${y} coords x: ${x} `)
            this.trainPosition.style.top = y + "px"; 
            this.trainPosition.style.left = x + "px"; 
        
            if ( y == 272){
                this.flag2 = true
                console.log("flag 2 enabled")
                
                
            }
            
        }
         // movement 3
        if ( x > 480 && this.flag2 == true ) {
            x = x - 10;
            console.log(` 3 coords y: ${y} coords x: ${x} `)
            this.trainPosition.style.top = y + "px"; 
            this.trainPosition.style.left = x + "px";

            if ( x == 475) {
                this.flag1 = false;
                this.flag3 = true;
                console.log("flag 3 enabled")
            }

        }
            // movement 4
        if ( x == 40 && y < 360 && this.flag3 == true && this.flag1 == false) {
            y = y + 10;
            console.log(` 4 coords y: ${y} coords x: ${x} `)
            this.trainPosition.style.top = y + "px";
            this.trainPosition.style.left = x + "px";

        }
    
        }

       
    }
    
    
                      
                                       
      
                        

     



 export default TrainMoving