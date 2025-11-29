import { Component } from '@angular/core';
import { Location } from "../home/location/location";

import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-about',
  imports: [ RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
