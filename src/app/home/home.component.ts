import { Component, OnInit } from '@angular/core';
import { Menues } from '../menues';
import { data } from '../data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  category: string[] = [
    'Break your fast',
    'time for lunch',
    'can i have a snacks',
    'dinner',
    'burgers and beverges',
  ];
  list: Menues[] = data;
  constructor() {}

  ngOnInit() {}
}
