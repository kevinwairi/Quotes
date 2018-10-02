import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'kevin', 'The eye should learn to listen before it looks.', 'Robert Frank', 0, 0, new Date()),
    new Quotes(2, 'kevin', 'Which of my photographs is my favorite? The one I’m going to take tomorrow', 'Imogen Cunningham', 0, 0, new Date()),
    new Quotes(3, 'kevin', 'Character, like a photograph, develops in darkness', 'Yousuf Karsh', 0, 0, new Date()),
    new Quotes(4, 'kevin', 'It is more important to click with people than to click the shutter', 'Alfred Eisenstaedt', 0, 0, new Date()),
    new Quotes(3, 'kevin', 'My life is shaped by the urgent need to wander and observe, and my camera is my passport.', 'Steve McCurry', 0, 0, new Date()),
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

  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}