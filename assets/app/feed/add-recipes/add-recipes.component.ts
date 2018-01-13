import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed-service';
import { NgForm } from "@angular/forms";
import  { feed }  from "../feedModel"

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipeComponent implements OnInit {

    recipe: feed;

  constructor( private feedService: FeedService ) { }

  ngOnInit() {

  }

  onSubmit(recipe: NgForm){

    const newRecipe = new feed(recipe.value.title,recipe.value.description, recipe.value.ingredients, 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201106-xl-balinese-grilled-chicken.jpg%3Fitok%3D1zZCTo14&w=700&q=85')
    //   let newRecipe = new feed({
    //       title: recipe.value.title,
    //       description: recipe.value.description,
    //       ingredients : [{
    //         ingredient: recipe.value.ingredients,
    //         amount: '10kg'
    //       },
    //       {
    //         ingredient: recipe.value.ingredients,
    //         amount: '10kg'
    //       }],
    //       image: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201106-xl-balinese-grilled-chicken.jpg%3Fitok%3D1zZCTo14&w=700&q=85"
    //   })

    this.feedService.addRecipe(newRecipe)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      )
      }
}
