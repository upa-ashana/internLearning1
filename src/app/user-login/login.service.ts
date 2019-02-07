import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  newBuddha(){
    return [
      {"name":"osho", "country":"India"},
      {"name":"Dalai Lama", "country":"China"},
      {"name":"Gautam Buddha", "country":"Nepal"}
    ];
  }

  hello(){
    return "hello usha it is very difficult to work with loop";
  }
}
