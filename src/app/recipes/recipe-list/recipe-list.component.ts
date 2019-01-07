import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('First Recipe', 'Desc of my first recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('First Recipe', 'Desc of my first recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
