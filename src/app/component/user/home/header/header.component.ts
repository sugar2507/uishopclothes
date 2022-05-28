import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-header-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUser();
    
  }
  email!: string;

  getUser() {
    if (getAuth()) {
      const auth = getAuth();
      console.log(auth.currentUser?.email);
      this.email = auth.currentUser?.email as string;
      return this.email;
    } else return (this.email = 'Anonymous');
  }
}
