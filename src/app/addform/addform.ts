import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { recipeInterface } from '../Interfaces/recipeInterface';
import { Recipeservice } from '../services/recipeservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  imports: [ReactiveFormsModule],
  templateUrl: './addform.html',
  styleUrls: ['./addform.css']
})
export class Addform {
    recipeFormData =new FormGroup({
    recipeTitle:new FormControl(''),
    recipeIngredients:new FormControl(""),
    recipeInstructions:new FormControl(""),
    recipeCookingTime:new FormControl("")
  })
    constructor(private recipeservice:Recipeservice, private router: Router){}  

  onSubmit(){
    const formValue=this.recipeFormData .value
    console.log(formValue)

    const newdata: recipeInterface = {
      recipeTitle: formValue.recipeTitle || '',
      recipeIngredients: formValue.recipeIngredients || '',
      recipeInstructions: formValue.recipeInstructions || '',
      recipeCookingTime: Number(formValue.recipeCookingTime) || 0, 
    };
    
    this.recipeservice.saveRecipe(newdata).subscribe((data:recipeInterface)=>{
            console.log(data)
            this.router.navigate(['/showRecipe']);
          }
        )
  }
}
