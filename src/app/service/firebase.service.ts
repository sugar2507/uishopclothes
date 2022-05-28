import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;
  // constructor(public firebaseAuth: Auth) {}

  //  signin(email:string, password:string){
  //    signInWithEmailAndPassword(this.firebaseAuth,email,password)
  // }

  // login(email: string, password: string): Observable<any> {
  //   return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  // }
  // logout(){
  //   return from(this.firebaseAuth.signOut())
  // }

  constructor(private auth: AngularFireAuth, private router: Router) {}

  email!: string;
  getUser() {
    const auth = getAuth();
    console.log(auth.currentUser?.email);
    this.email = auth.currentUser?.email as string;

    return this.email;
  }

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      async (res) => {
        localStorage.setItem('token', JSON.stringify(res.user));
        this, this.router.navigate(['']);
        this.getUser();
        alert(`'login successful ${await JSON.stringify(this.email)}'`);
      },
      (err) => {
        alert('Something wrong');
        this.router.navigate(['./auth/login']);
      }
    );
  }
  register(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Register successful ');
        this.router.navigate(['./auth/login']);
      },
      (err) => {
        alert('Something wrong');
        this.router.navigate(['./auth/login']);
      }
    );
  }

  logout() {
    this.auth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['./auth/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  // signUp(email: string, password: string): Observable<UserCredential> {
  //   return from(createUserWithEmailAndPassword(this.auth, email, password));
  // }

  // login(email: string, password: string) {
  //   return from(signInWithEmailAndPassword(this.auth, email, password));
  // }

  // updateProfile(profileData: Partial<UserInfo>): Observable<any> {
  //   const user = this.auth.currentUser;
  //   return of(user).pipe(
  //     concatMap((user) => {
  //       if (!user) throw new Error('Not authenticated');

  //       return updateProfile(user, profileData);
  //     })
  //   );
  // }

  // logout(): Observable<any> {
  //   return from(this.auth.signOut());
  // }
}
