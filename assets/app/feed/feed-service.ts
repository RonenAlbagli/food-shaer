
const feeds = require('./data/feeds-data.json');

import { Http } from '@angular/http';
// import { Feed } from '../../../server/model/feed.model';
import { Injectable } from '@angular/core';
// import feeds from './data/feeds-data.json';

// const feeds = data;


@Injectable()
export class FeedService {

    // private feed:Feed[] = [];

    constructor(private http: Http){}

    getFeeds(){
    //    this.http
    console.log(feeds);
    return feeds.feeds;
    }

    addRecipe(){
        // this.http.post('/')
    }


}