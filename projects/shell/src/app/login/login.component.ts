import { Component } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { getAuth, signInWithRedirect } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  provider = new GoogleAuthProvider();

  title = 'login';

  login() {
    console.log('logging in');
    const auth = getAuth();
    signInWithRedirect(auth, this.provider);
  }
}
