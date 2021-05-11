import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../services/category/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryId: string | unknown;
  category: any;
  recipeName = '';
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  createRecipe(): any {
    console.log('component: ', this.category, this.recipeName);
    const newRecipe = {name: this.recipeName};
    // @ts-ignore
    this.categoryService.createRecipe(this.category, newRecipe).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.categoryId = params.get('id');
        // @ts-ignore
        this.categoryService.getCategory(this.categoryId).subscribe(response => {
          this.category = response;
          console.log(this.category);
        });
      });
  }

}
