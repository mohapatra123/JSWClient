import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CareerService } from 'src/app/core/services/career.service';
import { Country, State, City }  from 'country-state-city';
import { ICountry, IState, ICity, Timezones, CountryData, StateData, CityData } from 'src/app/models/career/location.model';

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

  country: CountryData = { code: ''};
  state: StateData = { code: ''};
  city: CityData = { name: ''};

  countryArr: ICountry[] = [];
  stateArr: IState[] = [];
  cityArr: ICity[] = [];


  constructor(private fb: FormBuilder,
    private _reactiveFormsModule: ReactiveFormsModule,
    private _authService: AuthService,
    private _careerService: CareerService,
    private _router: Router) {

     }

  ngOnInit(): void {
    this.countryArr = Country.getAllCountries();
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
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
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
        this._router.navigateByUrl('thankyou');
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

  selectedChanged(event: any, obj: string){
    if(obj == 'country'){
      this.stateArr = State.getStatesOfCountry(event);
      if(this.country.code != event){
        this.cityArr = [];  
        this.country.code = event;
      }      
    }
    else if(obj == 'state')    {      
      this.cityArr = City.getCitiesOfState(this.country.code, event);      
    }
  }
}
