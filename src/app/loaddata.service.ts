import { Injectable } from '@angular/core';
import { Product } from './product';
import { profile } from './Profile';
import { myProfile } from 'src/assets/data/profiledata';
import { products } from 'src/assets/data/productdata';


@Injectable({
  providedIn: 'root'
})
export class LoaddataService { 

  constructor() { }

  loadProducts(): Product[] {
return products;  
  }
loadProfile(): profile{
  return myProfile;
}



}
