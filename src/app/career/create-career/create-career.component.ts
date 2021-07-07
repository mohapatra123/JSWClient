import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { CareerService } from 'src/app/core/services/career.service';

@Component({
  selector: 'app-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.scss']
})
export class CreateCareerComponent implements OnInit {

  @ViewChild('inputFile') inputFileType: any;

  createCareerForm: any;
  _careerId: number = 0;
  jsonObject: any;
  careerOjbect: any;
  careerObj: any;
  isPosted: boolean = false;

  constructor(private fb: FormBuilder,
    private _reactiveFormsModule: ReactiveFormsModule,
    private _authService: AuthService,
    private _careerService: CareerService) {

     }

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
      careerId: new FormControl(this.careerOjbect.careerId),
      phoneNo: new FormControl('', ),
      refInfo: new FormControl('', [Validators.required]),
      cvFile: new FormControl('', [Validators.required]),
      filePath: new FormControl(''),
      linkedIn: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    // this._careerService.getCareer().subscribe(res => {
    //   console.log(res)
    // })
    this.isPosted = false;
    let formData: FormData = new FormData();
    formData.append('cvFile', this.createCareerForm.get('filePath').value);
    console.log(formData);
    this._careerService.postCareer(this.createCareerForm.value, formData).subscribe(res => {
      console.log(res)
      if(res.error == false){
        this.createCareerForm.reset();
        this.isPosted = true;
        this.inputFileType.nativeElement.value = null;
      }
    })
    console.log(this.createCareerForm.value);
  }

  onFileChange(event: any){
    console.log(1);
    if(event.target.files.length > 0){
      const file = (event.target.files[0] as File);
      //this.createCareerForm.get('filePath').setValue(file);
      console.log(2);
      this.createCareerForm.patchValue({
        filePath: file
      });
    }
  }

}
