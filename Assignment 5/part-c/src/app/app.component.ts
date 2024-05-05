import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';

  displayname='';
  displayaddress='';
  the_password='';
  displayemail='';
                                          
  getValue(name:string,address:string,email:string,password:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displayemail=email;
    this.the_password=password;

    alert('Registration Successful!')
  }

  login(email:string,password:string){
    const validEmail = this.displayemail;
    const validPassword = this.the_password;

    if(email === validEmail && password === validPassword){
      alert('Login Successful');
    }
    else{
      alert('Login Failed')
    }

  }
}