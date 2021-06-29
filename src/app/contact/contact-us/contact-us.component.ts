import { Component, OnInit } from '@angular/core';
import { CareerService } from '../../core/services/career.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  careerData: any;

  testData: any = [];

  constructor(private _careerService: CareerService) { 

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.testData = [
      { id: 1, name: 'Java', location: 'Mumbai', isRemote: 1},
      { id: 2, name: 'Node', location: 'Hyderabad', isRemote: 0}
    ]
  }

  getCareerData(){
    this._careerService.getCareer().subscribe(res => {      
      console.log(res);
      this.careerData =  res;
    })
  }
}
