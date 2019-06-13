import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() photos: Photo[];
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'piece-ui-modal', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
