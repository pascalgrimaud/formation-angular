import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title: string;

  // ordre: constructor, ngOnChanges, ngOnInit
  constructor() { }

  ngOnInit() {
    this.title = 'JHipster v0.0.1';
  }

}
