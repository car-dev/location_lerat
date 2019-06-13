export class Photo {

    
    public url: string;
    public piece: string;
    public description: string;

    constructor(piece:string, url: string, description: string) {
        this.piece = piece;
        this.description = description;
        this.url = './../../../assets/img/'+url;
    }
}