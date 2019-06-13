import { Component, OnInit } from '@angular/core';

import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  
  photos: Photo[];

  constructor(
  private photoService: PhotoService,
    ) { }
  
  ngOnInit(): void {
    this.photos = this.photoService.photos;  
  }
}
