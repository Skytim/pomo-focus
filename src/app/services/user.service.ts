import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public afAuth: AngularFireAuth) {

  }

  isLoginSubject = new BehaviorSubject<boolean>(this.hasLogin());

  public hasLogin(): boolean {
    return !!localStorage.getItem('UserID');
  }

  async login(): Promise<void> {

    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    localStorage.setItem('UserID', credential.user.uid);

    this.isLoginSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('UserID');
    this.isLoginSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  getUserId() {
    return localStorage.getItem('UserID');
  }

}
