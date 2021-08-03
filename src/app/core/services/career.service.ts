import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private readonly baseUri: string = environment.baseUri;
  private header: HttpHeaders;
  errorMsg: string = '';


  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders();
    this.header.append('Content-Type', 'application/json');
    this.header.append('Access-Control-Allow-Origin' , '*');
    this.header.append('Access-Control-Allow-Headers', '*');
  }

  getCareer(): Observable<any>{
    return this._http.get(this.baseUri + 'careers', { headers: this.header }).pipe(
      map((response) => {
          return response;
      }), catchError(err => {
        let errorMsg: string;
        if (err.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${err.error.message}`;
        } else {
            this.errorMsg = this.getServerErrorMessage(err);
        }
        return throwError(this.errorMsg);
      })
    );
  }

  getCareerById(careerId: number): Observable<any>{
    return this._http.get(this.baseUri + 'careers/' + careerId, { headers: this.header }).pipe(
      map((response) => {
          return response;
      }), catchError(err => {
        let errorMsg: string;
        if (err.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${err.error.message}`;
        } else {
            this.errorMsg = this.getServerErrorMessage(err);
        }
        return throwError(this.errorMsg);
      })
    );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }
    }
}

  postCareer(postData: any, formData: FormData): Observable<any>{
    //let formData: FormData = new FormData();
    formData.append('firstName', postData.firstName);
    formData.append('lastName', postData.lastName);
    formData.append('emailId', postData.emailId);
    formData.append('phoneNo', postData.phoneNo);
    formData.append('location', postData.location);
    formData.append('careerId', postData.careerId);
    formData.append('refInfo', postData.refInfo);
    formData.append('country', postData.country);
    formData.append('state', postData.state);
    formData.append('city', postData.city);
    formData.append('linkedIn', postData.linkedIn);
    //formData.append('cvFile', postData.get('filePath').value);

    return this._http.post(this.baseUri + 'careers/apply', formData, { headers: this.header }).pipe(
      map((response) => {
          return response;
      }),
      catchError(err => {
        let errorMsg: string;
        if (err.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${err.error.message}`;
        } else {
            this.errorMsg = this.getServerErrorMessage(err);
        }
        return throwError(this.errorMsg);
      })
    );
  }
}
