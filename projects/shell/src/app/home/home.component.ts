import { Component, OnDestroy, inject } from '@angular/core';
import { Auth, User, getAuth, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  
  private auth: Auth = getAuth();
  user$ = user(this.auth);  
  userSubscription: Subscription;
  user: User |null = null;

  constructor() {
    this.userSubscription = this.user$.subscribe(aUser => {
        //handle user state changes here. Note, that user will be null if there is no currently logged in user.
     console.log(aUser);
     this.user = aUser;
    })
    
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
