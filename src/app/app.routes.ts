import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Addform } from './addform/addform';
import { Recipelist } from './recipelist/recipelist';

export const routes: Routes = [
    {path:"login",component:Login},
    {path:"register",component:Register},
    {path:"addRecipe",component:Addform},
    {path:"showRecipe",component:Recipelist}
];
