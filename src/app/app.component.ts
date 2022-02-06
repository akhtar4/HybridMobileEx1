import { Component } from '@angular/core';
import { LoaddataService } from './loaddata.service';
import { profile } from './Profile';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SYST3500 In-Class Exercise 1';
  products!: Product[];
  profile!: profile;
  go = false;
  constructor(private ldData: LoaddataService){}

  getData(){
    this.products = this.ldData.loadProducts();
    console.log(this.products);

    this.profile = this.ldData.loadProfile();
    console.log(this.profile); 

    this.go = !this.go;

  }
}

