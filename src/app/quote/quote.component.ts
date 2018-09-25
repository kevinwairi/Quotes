import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'moha1', 'to be or not be', 'willy', 0, 0, new Date()),
    new Quotes(2, 'moha0', 'to beeeee or not be', 'willy shakes', 0, 0, new Date()),
    new Quotes(3, 'moha1', 'to be or not be', 'willy2', 0, 0, new Date()),
    new Quotes(4, 'moha3', 'to bee or not be', 'willy shake', 0, 0, new Date()),
  // tslint:disable-next-line:semicolon
  ]

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  deleteQuote(index) {
    this.quotes.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}