export class feed {
    title: string;
    description: string;
    ingredients: [{
        ingredientName: string,
        ingredientAmount: string
    }];
    image: string;


    constructor(title: string, description: string, ingredient: any, image: string) {
        this.title = title;
        this.description = description;
        this.ingredients = [{
            ingredientName : ingredient.name,
            ingredientAmount : ingredient.amount
        }];
        this.image = image
    }
}