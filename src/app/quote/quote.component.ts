import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Men go abroad to wonder at the heights of mountains, at the huge waves of the sea, at the long courses of the rivers, at the vast compass of the ocean, at the circular motions of the stars, and they pass by themselves without wondering. ',
      'Saint Augustie ,', 'Doreen Kinya',
      new Date(2020, 1, 27), 25, 3),
    new Quote(2, "Words are more powerful than some noises. Noises won't last long. Lyrics are so important, and people don't realise that.",
      'Billie Eilish,', 'Clement Mwaki',
      new Date(2020, 2, 6), 203, 1),
    new Quote(3, 'My scientific studies have afforded me great gratification; and I am convinced that it will not be long before the whole world acknowledges the results of my work.',
      'Gregor Mendel,', 'Nella Ndinda',
      new Date(2019, 12, 29), 77, 50),
    new Quote(4, "You know, if I listened to Michael Dukakis long enough, I would be convinced we're in an economic downturn and people are homeless and going without food and medical attention and that we've got to do something about the unemployed.",
      'Ronald Regan,', 'Hassan Mohammed',
      new Date(2019, 12, 29), 100, 20),
  ];

  quoteDelete(isRead, index) {
    if (isRead) {
      let toDelete: boolean = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  displayInfo(index) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit() {
  }


}