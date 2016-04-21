import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
        <voter
            [voteCount]="post.voteCount"
            [myVote]="post.myVote"
            (onVote)="onVote($event)"
        >
        </voter>
    `,
    directives: [VoterComponent]
})
export class AppComponent { 
    
    post = {
        voteCount: 10,
        myVote: 0
    };
    
    onVote($event){
        console.log($event);
    }
}