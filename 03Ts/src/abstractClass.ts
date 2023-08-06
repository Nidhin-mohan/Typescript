abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
    )

   {}
   abstract  getSepia(): void
   getReel (): number{
    return 8
     //bla bla bla
   }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string, 
        public filter: string,
        public burst : number ){
            super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("first")
    } 
    
}
const Nidhin = new Instagram ("test", "test", 8)

Nidhin.getSepia