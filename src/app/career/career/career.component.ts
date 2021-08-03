import { Component, OnInit } from '@angular/core';
import { CareerService } from '../../core/services/career.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { careerTypes } from 'src/app/models/constant/constant.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerData: any;
  _careerTypeList: any;

  testData: any = [];

  constructor(private _careerService: CareerService, private _router: Router, private _authService: AuthService) {

  }

  ngOnInit(): void {
    this.getCareerData();
    this._careerTypeList = careerTypes;
    window.scrollTo(0, 0);
    // this.testData = [
    //   {"careerId":1,"careerTitle":"java developer","careerType":"intern","location":"mumbai","description":"dec_java","status": 1 },
    //   {"careerId":2,"careerTitle":"python developer","careerType":"intern","location":"hyderabad","description":"dec_python","status": 2 }
    // ];
  }

  getCareerData(){
    this._careerService.getCareer().subscribe(res => {
      this.careerData =  res;
    })
  }

  postCareer(item: any){
    //this._authService.setLocalValue('careerPostData', item)
    this._router.navigateByUrl('careers/' + item.careerId);
  }

  setLocation(city: string, workPlace: number): string{
    switch(workPlace){
      case 0:
        return city;
      case 1:
        return 'Remote';
      case 2:
        return city + ' (Currently Remote)';
    }
    return '';
  }
}
