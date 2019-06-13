import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  
  photos = [
      new Photo('Pièce de vie','piece_vie.jpg', "Déjeuner ou Diner à l'intérieur"),
      new Photo('Pièce de vie','salon.jpg', "Se détendre dans le salon"),
      new Photo('Pièce de vie','cheminee.jpg', "Regarder un film au coin de la cheminée"),
      new Photo('Cuisine', 'cuisine_1.jpg','Préparer le déjeuner'),
      new Photo('Cuisine', 'cuisine_2.jpg','Manger une glace ou se faire des crêpes'),
      new Photo('Sdb','sdb_2.jpg','Profiter d\'un moment d\'intimité'),
      new Photo('Chambre parentale','chambre_1-1.jpg','Rester à proximité des enfants'),
      new Photo('Chambre parentale','chambre_1-2.jpg','Profiter d\'un espace indépendant au calme'),
      new Photo('Chambre enfants','chambre_2-1.jpg', 'Papoter entre frères et soeurs'),
      new Photo('Chambre enfants','chambre_2-2.jpg', 'Faire ses devoirs de vacances'),
      new Photo('Mezzanine', 'mezzanine_1.jpg','Lire un bouquin et regarder la mer'),
      new Photo('Mezzanine', 'mezzanine_2.jpg','Se préparer à une belle journée'),
      new Photo('Extérieur', 'facade.jpg', 'Se garer devant la maison dans la rue'),
      new Photo('Extérieur', 'jardin.jpg', 'Se détendre dans le jardin ou faire un barbecue'),
      new Photo('Extérieur', 'terrasse.jpg', 'Déjeuner au soleil'),
    ];

  constructor() { }
}
