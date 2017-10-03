import { Component, OnInit } from '@angular/core';
import { Item } from "./item";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection: Item[];
  form: FormGroup;

  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder, private modalService: NgbModal) {
    // pour mettre plusieurs validateurs, mettre un tableau
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ])
    this.stateCtrl = fb.control(0);

    // name, reference: correspondent aux noms dans le
    // formulaire html
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
    // il faut ensuite penser à ajouter [formGroup]="form"
    // dans le formulaire html
  }

  ngOnInit(): void {
      this.collection = [
        new Item({reference: '1234', name: 'Marina', state: 0}),
        new Item({reference: '2345', name: 'Patrick', state: 1}),
        new Item({reference: '3456', name: 'Quentin', state: 2})
      ];
  }

  addItem() {
    this.collection.push({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });
    this.reset();
    this.open();
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isChampValid(champs: string) {
    return this.form.get(champs).dirty && this.form.get(champs).hasError('minlength');
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée!';
  }
}
