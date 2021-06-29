import { Component, OnInit } from '@angular/core';
import { CareerService } from '../../core/services/career.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerData: any;

  testData: any = [];

  constructor(private _careerService: CareerService, private _router: Router, private _authService: AuthService) { 

  }

  ngOnInit(): void {    
    this.testData = [
      {"careerId":1,"careerTitle":"java developer","careerType":"intern","location":"mumbai","description":"dec_java","status": 1 },
      {"careerId":2,"careerTitle":"python developer","careerType":"intern","location":"hyderabad","description":"dec_python","status": 2 }
    ];
  }

  getCareerData(){
    this._careerService.getCareer().subscribe(res => {      
      console.log(res);
      this.careerData =  res;
    })
  }

  postCareer(item: any){
    this._authService.setLocalValue('careerPostData', item)
    this._router.navigateByUrl('career/create-career');
  }
}
