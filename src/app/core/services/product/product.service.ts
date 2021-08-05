import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUri: string = environment.baseUri;
  private header: HttpHeaders;
  errorMsg: string = '';


  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders();
    this.header.append('Content-Type', 'application/json');
    this.header.append('Access-Control-Allow-Origin' , '*');
    this.header.append('Access-Control-Allow-Headers', '*');
  }

  getProduct(): Observable<any>{
    return this._http.get(this.baseUri + 'products', { headers: this.header }).pipe(
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

  postCareer(formData: FormData): Observable<any>{
    return this._http.post(this.baseUri + 'contactUs', formData, { headers: this.header }).pipe(
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
}
