import { Component } from '@angular/core';
import { Frequently } from "../home/frequently/frequently";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [ Frequently ,RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {

}
