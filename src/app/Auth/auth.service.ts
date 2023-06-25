import { Injectable } from '@angular/core';
import { userdata } from 'src/assets/userData';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userDataUrl = 'assets/userData.json'; // Path to the JSON file

  constructor() { }


  login(email: string, password: string): boolean {
    const user = userdata.find(
      (u: any) => u.email === email && u.password === password
    );
    return !!user; // Returns true if the user exists, false otherwise
  }
  
}
