import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    `,
    directives: [LikeComponent]
})
export class AppComponent { 
    
    tweet = {
        totalLikes: 10,
        iLike: false
    };
}