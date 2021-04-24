import { Component, OnInit, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-insure',
  templateUrl: './insure.component.html',
  styleUrls: ['./insure.component.scss']
})
export class InsureComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) { }

  ngOnInit(): void {
  }

  scrolled: boolean = false;
  myTag: any;
  onScroll($event: any){    
    if($event.target.scrollTop == 1408){
      let myTag: DOMTokenList;
      myTag = this.el.nativeElement.querySelector("section").classList;      
      myTag.remove("sticky-top");
    }
  } 
}
