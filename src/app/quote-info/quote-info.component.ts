import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() addQuote = new EventEmitter<Quotes>();
  constructor() { }

  upvoteQuote() {
    this.quote.upvote ++;
  }
  downvoteQuote() {
    this.quote.downvote ++;
  }
  ngOnInit() {
  }

}