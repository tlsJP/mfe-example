import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {
  Auth,
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithRedirect,
  signOut,
  user,
} from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';

  private auth: Auth = getAuth();
  user$ = user(this.auth);
  userSubscription: Subscription;
  user: User | null = null;

  constructor(defaultApp: FirebaseApp) {
    this.userSubscription = this.user$.subscribe((aUser) => {
      console.log(aUser);
      this.user = aUser;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  signOut() {
    signOut(this.auth);
  }

  signIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }
}
