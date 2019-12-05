class Toggle{

    constructor() {
        this.toggleshift = document.querySelector("#toggle");
        this.trainshow = document.querySelector("#trainshow");
        this.traintimes = document.querySelector("#traintimes");
        this.toggleshift2 = document.querySelector("#toggle2")
        
        
        this.ChangeView();
        this.ChangeView2();
        
     }

     ChangeView() {
         this.toggleshift.addEventListener("click", () =>{

         trainshow.classList.toggle("hidden2");
         traintimes.classList.toggle("hidden2");



         
     
         })

        }
        ChangeView2() {
            this.toggleshift2.addEventListener("click", () =>{
   
            trainshow.classList.toggle2("trainshow");
            
   
   
   
            
        
            })
   
           }
      


        

        
    }

export default Toggle