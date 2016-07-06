import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

import {SignService} from './sign.service';


@Injectable()
export class AuthenticationService {

  constructor(private _router: Router,
              private signService: SignService) { }

  logout() {
    localStorage.removeItem("hotel");
    this._router.navigate(['Login']);
  }

  login(hotel){
    let h = hotel;
    let authenticatedHotel;
    console.log(hotel);
    this.signService
      .logIn(hotel)
      .subscribe(
        d => {
          if(d){
            localStorage.setItem("hotel", JSON.stringify(h));
            this._router.navigate(['Deals']);
            return true;
          }else{
            return false;
          }
        },
        error => console.log(error),
        () => console.log('Success!!!')
      )
  }

   checkCredentials(): boolean {
    if (localStorage.getItem("hotel") === null){
      this._router.navigate(['Login']);
      return false;
    }
    return true;
  }

}
