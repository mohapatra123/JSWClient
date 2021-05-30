import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  @ViewChild('targetUI') TargetUI!: ElementRef;

  scrollToElement($element: any): void {
    this.TargetUI.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end'});
  }

  ngOnInit(): void {
  }

}
