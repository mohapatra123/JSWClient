import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.scss']
})
export class CreateCareerComponent implements OnInit {

  createCareerForm: any;
  _careerId: number = 0;
  jsonObject: any;
  careerOjbect: any;
  careerObj: any;

  constructor(private fb: FormBuilder, 
    private _reactiveFormsModule: ReactiveFormsModule, 
    private _authService: AuthService) {
      
     }  

  ngOnInit(): void {
   this.setForm();
  }

  setForm(){
    if(this._authService.getLocalValue('careerPostData') != null && this._authService.getLocalValue('careerPostData') != undefined){
      this.jsonObject = this._authService.getLocalValue('careerPostData');
      this.careerOjbect = JSON.parse(this.jsonObject);
      this.careerObj = {
        careerTitle: this.careerOjbect.careerTitle,
        careerType: this.careerOjbect.careerType,
        location: this.careerOjbect.location,
        description: this.careerOjbect.description,
        careerId: this.careerOjbect.careerId
      }      
    }
    this.createCareerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      careerId: new FormControl('', ),
      phoneNo: new FormControl('', ),
      refInfo: new FormControl('', [Validators.required])      
    });    
  }

  onSubmit(){
    console.log(this.createCareerForm.value);
  }
}
