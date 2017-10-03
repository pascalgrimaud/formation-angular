import { Component, OnInit } from '@angular/core';
import { Item } from "./item";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

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

  constructor(fb: FormBuilder) {
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
    console.log(this.form.value);
    this.collection.push({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });
    this.reset();
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isChampValid(champs: string) {
    return this.form.get(champs).dirty && this.form.get(champs).hasError('minlength');
  }
}
