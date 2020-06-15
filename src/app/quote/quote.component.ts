import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world. ',
      'Lucille Ball ,', 'Billy Ayiera',
      new Date(2020, 3, 6), 0, 0),
    new Quote(2, 'Once the realization is accepted that even between the closest human beings infinite distances continue, a wonderful living side by side can grow, if they succeed in loving the distance between them which makes it possible for each to see the other whole against the sky.',
      'Rainer Maria Rilke,', 'Billy Ayiera',
      new Date(2020, 3, 6), 0, 0),
    new Quote(3, 'When you adopt the viewpoint that there is nothing that exists that is not part of you, that there is no one who exists who is not part of you, that any judgment you make is self-judgment, that any criticism you level is self-criticism, you will wisely extend to yourself an unconditional love that will be the light of the world.',
      'Harry Palmer,', 'Billy Ayiera',
      new Date(2020, 3, 6), 0, 0),
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



  constructor() { }

  ngOnInit() {
  }


}