import { Component, OnInit, Input } from '@angular/core';
import { profile } from '../Profile';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() headInfo!: profile;

  constructor() { }
  
  ngOnInit(): void {

  }

}
