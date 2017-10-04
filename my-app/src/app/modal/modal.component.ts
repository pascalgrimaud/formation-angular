import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  // pour pouvoir utiliser le composant parent
  @Input() msg;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.router.navigate(['/list']);
  }
}
