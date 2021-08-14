import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CareerService } from 'src/app/core/services/career.service';
import { Country, State, City }  from 'country-state-city';
import { ICountry, IState, ICity, Timezones, CountryData, StateData, CityData } from 'src/app/models/career/location.model';
import { careerTypes } from 'src/app/models/constant/constant.model';

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
  careerObj: any = {
    careerTitle: '',
        careerType: '',
        city: '',
        description: '',
        careerId: 0,
        country: '',
        workPlace: 0
  };
  careerValidation: any = {
    isFirstNameValid: true, isLastNameValid: true, isEmailValid: true, isPhoneValid: true, isCountryValid: true, isStateValid: true, isCityValid: true, isLinkedInValid: true, isFileValid: true, isValidEmailRegex: true, phoneNumber: ''
  }
  isPosted: boolean = false;
  _careerTypeList: any;

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
    private _router: Router, private _activatedRoute: ActivatedRoute) {

     }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    })
    let id = this._activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.countryArr = Country.getAllCountries();
    this._careerTypeList = careerTypes;
    this.setForm(Number(id));
    window.scrollTo(0, 0);

  }

  setForm(careerId: number){

    this._careerService.getCareerById(careerId).subscribe(res => {
      console.log(res);
      this.careerObj = {
        careerTitle: res.careerTitle,
        careerType: res.careerType,
        city: res.city,
        description: res.description,
        careerId: res.careerId,
        country: res.country,
        workPlace: res.workPlace
      }
    })

    this.createCareerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      careerId: new FormControl(careerId),
      phoneNo: new FormControl('', ),
      refInfo: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      cvFile: new FormControl('', [Validators.required]),
      filePath: new FormControl(''),
      linkedIn: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    if(this.formValidation()){
      console.log(this.createCareerForm);
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
  }

  formValidation(): boolean{
    console.log(this.createCareerForm.value);
    let validForm: boolean = false;
    if(this.createCareerForm.value.firstName == ''){
      this.careerValidation.isFirstNameValid = false;
      validForm = false;      
    }
    else{
      this.careerValidation.isFirstNameValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.lastName == ''){
      this.careerValidation.isLastNameValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isLastNameValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.emailId == ''){      
      this.careerValidation.isEmailValid = false;
      validForm = false;
    }
    else{      
      this.careerValidation.isEmailValid = true;   
      validForm = true;
      const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
      if(!emailRegex.test(String(this.createCareerForm.value.emailId).toLowerCase())){
        this.careerValidation.isEmailValid = true;        
        this.careerValidation.isValidEmailRegex = false;
        validForm = false;
      }  
    }
    if(this.createCareerForm.value.phoneNo == ''){
      this.careerValidation.isPhoneValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isPhoneValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.country == ''){
      this.careerValidation.isCountryValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isCountryValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.state == ''){
      this.careerValidation.isStateValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isStateValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.city == ''){
      this.careerValidation.isCityValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isCityValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.linkedIn == ''){
      this.careerValidation.isLinkedInValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isLinkedInValid = true;
      validForm = true;  
    }
    if(this.createCareerForm.value.filePath == '' || this.createCareerForm.value.filePath.type != 'application/pdf'){
      this.careerValidation.isFileValid = false;
      validForm = false;
    }
    else{
      this.careerValidation.isFileValid = true;
      validForm = true;  
    }    
    return validForm;
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

  getCountry(countryCode: string){
    return Country.getCountryByCode(countryCode)?.name;
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
