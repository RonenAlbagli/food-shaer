import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed-service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  constructor(private feedService: FeedService) { }
  feeds;
  ngOnInit() {
    console.log('in')
     this.feedService.getFeeds().subscribe(
       data => this.feeds = data,
       error=>  console.log(error)
     )
  }

}
