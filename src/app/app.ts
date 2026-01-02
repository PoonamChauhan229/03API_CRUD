import { Component, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Navbar } from './navbar/navbar';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Register,Navbar,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('03API_CRUD');
  
 
}
