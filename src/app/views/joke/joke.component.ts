import { Component } from '@angular/core';
import {JokeTellerService} from '../../models/jokeTeller.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.sass']
})
export class JokeComponent {
joke: string;
  constructor(private dad: JokeTellerService) {
    this.updateJoke();
  }

updateJoke(): void {
    this.dad.tellJoke().subscribe( res => {
      console.log(res);
      this.joke = res.joke;
    });
  }
}
