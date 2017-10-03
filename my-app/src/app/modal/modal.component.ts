import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // pour pouvoir utiliser le composant parent
  @Input() msg;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
