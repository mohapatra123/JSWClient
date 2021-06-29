import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLocalValue(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalValue(key: string){
    return localStorage.getItem(key);
  }

  removeLocalValue(key: string){
    localStorage.removeItem(key);
  }
}
