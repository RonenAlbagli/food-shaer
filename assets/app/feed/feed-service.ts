

import { Http, Response, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/Rx';


import { Recipes } from '../../../models/recipesModel';
import { Observable } from 'rxjs/Observable';
import { error } from 'selenium-webdriver';
const feeds = require('./data/feeds-data.json');



@Injectable()
export class FeedService {
   private recipesList: Recipes[] =  [];
    // private feed:Feed[] = [];

    constructor(private http: Http){}

    getFeeds(){
        return this.http.get('http://localhost:3000/recipes')
            .map((response:Response)=>{
                console.log(response);
                const recipesData = response.json().obj; 
                this.recipesList = recipesData;
                return this.recipesList;
            })
            .catch((error:Response)=> Observable.throw(error.json()));
        
    }

    addRecipe(recipes: Recipes){
       const headers = new Headers({'Content-Type':'application/json'})
       return this.http.post('http://localhost:3000/recipes', recipes, {headers})
        .map((response: Response)=> response.json())
        .catch((error: Response)=> Observable.throw(error.json()));
    }


}