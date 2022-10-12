import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role: "ANIMOUS" | "ADMIN" | "USER";


  constructor() {
    this.role = "ADMIN";

  }

  public getRole(): string {
    return this.role;

  }
}
