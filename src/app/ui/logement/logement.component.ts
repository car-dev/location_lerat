import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {


  pieces = [
    new Piece('Pièce de vie', [
      'piece_vie.jpg',
      'salon.jpg',
      'cheminee.jpg'
    ]),
    new Piece('Cuisine', [
      'cuisine_1.jpg',
      'cuisine_2.jpg'
    ]),
    new Piece('Sdb', [
      'cuisine_1.jpg',
      'cuisine_2.jpg'
    ]),
    new Piece('Chambre parentale', [
      'chambre_1-1.jpg',
      'chambre_1-2.jpg'
    ]),
    new Piece('Chambre enfants', [
      'chambre_2-1.jpg',
      'chambre_2-2.jpg'
    ]),
    new Piece('Mezzanine', [
      'mezzanine_1.jpg',
      'mezzanine_2.jpg'
    ]),
    new Piece('Extérieur', [
      'facade.jpg',
      'jardin.jpg',
      'terrasse.jpg'
    ])
  ];

  constructor(
  ) { }

  ngOnInit() {
  }

}
