import { Component, ChangeDetectorRef } from '@angular/core';
import { Recipeservice } from '../services/recipeservice';
import { recipeInterface } from '../Interfaces/recipeInterface';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-recipelist',
  standalone: true,  
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './recipelist.html',
  styleUrls: ['./recipelist.css'],
})
export class Recipelist {
  allReceipe: recipeInterface[] = [];
  selectedRecipe: any = null
  editForm!: FormGroup;

  constructor(
    private recipeservice: Recipeservice,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getReceipe();
    this.editForm = new FormGroup({
      recipeTitle: new FormControl(''),
      recipeIngredients: new FormControl(''),
      recipeInstructions: new FormControl(''),
      recipeCookingTime: new FormControl('')
    });
  }

  getReceipe() {
    this.recipeservice.showRecipe().subscribe((data: recipeInterface[]) => {
      this.allReceipe = data;
      console.log(this.allReceipe);
    });
  }

  deleteRecipe(recipe: any) {
    console.log(recipe.id);
    this.recipeservice.deleteRecipe(recipe.id).subscribe(() => {
      // Remove from array
      this.allReceipe = this.allReceipe.filter(r => r.id !== recipe.id);

      // Tell Angular to detect the change
      this.cd.markForCheck();
    });
  }

  openEditModal(recipe: any) {
    this.selectedRecipe = recipe
    console.log('Editing recipe:', this.selectedRecipe);
    this.selectedRecipe = recipe;

    this.editForm.setValue({
      recipeTitle: recipe.recipeTitle,
      recipeIngredients: recipe.recipeIngredients,
      recipeInstructions: recipe.recipeInstructions,
      recipeCookingTime: recipe.recipeCookingTime
    });
  }

   closeModal() {
    this.selectedRecipe = null;
    this.cd.detectChanges()
  }

  finalUpdateRecipe() {
  if (!this.selectedRecipe?.id) return;

  const updated: recipeInterface = {
    ...this.selectedRecipe,
    ...this.editForm.value,
  };

  this.recipeservice
    .updateRecipe(this.selectedRecipe.id!, updated)
    .subscribe(() => {

      this.allReceipe = this.allReceipe.map(r =>
        r.id === updated.id ? updated : r
      );

      this.closeModal(); // now closes instantly
    });
}

 
}
