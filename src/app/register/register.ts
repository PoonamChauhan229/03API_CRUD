import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm ,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   submitForm(form:NgForm){
    console.log(form.value)
  }
}
