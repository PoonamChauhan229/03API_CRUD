import { Injectable } from '@angular/core';
import { recipeInterface } from '../Interfaces/recipeInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Recipeservice {
  url = 'https://69579ad1f7ea690182d28278.mockapi.io/v1/recipe';

  constructor(private http: HttpClient) {}

  saveRecipe(data: recipeInterface): Observable<recipeInterface> {
    return this.http.post<recipeInterface>(this.url, data);
  }

  showRecipe(): Observable<recipeInterface[]> {
    return this.http.get<recipeInterface[]>(this.url);
  }

  deleteRecipe(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  updateRecipe(id: string, data: recipeInterface): Observable<recipeInterface> {
    return this.http.put<recipeInterface>(`${this.url}/${id}`, data);
  }
}