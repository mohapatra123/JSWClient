import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insure-tab',
  templateUrl: './insure-tab.component.html',
  styleUrls: ['./insure-tab.component.scss']
})
export class InsureTabComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }
  active = 'top';
}
