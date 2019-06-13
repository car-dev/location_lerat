export class Piece {

    public libelle: string;
    public photos: string[];

    constructor(libelle: string, photos: string[]) {
        this.libelle = libelle;
        for (var _i = 0; _i < photos.length; _i++) {
            photos[_i]= './../../../assets/img/'+photos[_i];
        }
        this.photos = photos;
    }
}