import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
