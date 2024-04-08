console.log("Archivou Procesado...")

class Message{
    constructor(obj){
        this.obj = obj
    }

    print(){
        let code = `This code is in CDN: ${this.obj} holis`
        console.log(code);
        document.body.className = "pruebaBody"
    }
}
