import { Component } from '@angular/core';
import { Corousel } from "../corousel/corousel";
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-home',
  imports: [Corousel, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
