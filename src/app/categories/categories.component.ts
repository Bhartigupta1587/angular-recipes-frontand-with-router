import { CategoryService } from 'src/app/services/category/category.service';
import { Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: any[] |any;
  public categoryName: string| undefined;
  public categoryDescription: string|undefined;
  recipeName: any;

  constructor(private categoryService: CategoryService) { }
  getCategories(): any{
    // @ts-ignore
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    }, (err: any) => console.log(err));
  }


  ngOnInit(): void {
    this.getCategories();

    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your categories</span>';
      M.toast({html: toastHTML});
    }
  }

}
