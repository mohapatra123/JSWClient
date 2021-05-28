import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicies',
  templateUrl: './privacypolicies.component.html',
  styleUrls: ['./privacypolicies.component.scss']
})
export class PrivacypoliciesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  active = 'top';
}
