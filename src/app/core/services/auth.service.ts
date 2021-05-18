import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ) { }

  createUser(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afAuth.signOut();
  }

  hasUser(){
    return this.afAuth.authState;
  }

  loginRestApi(email:string, password: string){
    return this.http.post(environment.urlApi, {
      email,
      password
    })
  }
}
