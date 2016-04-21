
export class TweetService {
    getTweets() {
        return [
        { 
            imageUrl: "http://lorempixel.com/100/100/people?1",
            author: "Windward",
            handle: "@windwardstudios",
            body: "Looking for a better company reporting or docgen app?",
            totalLikes: 0,
            iLike: false
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?2",
            author: "AngularJS News",
            handle: "@angularjs_news",
            body: "Right Relevance : Influencers, Articles and Conversations ",
            totalLikes: 5,
            iLike: true
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?3",
            author: "UX & Bootstrap",
            handle: "@3rdwave",
            body: "10 Reasons Why Web Projects Fail ",
            totalLikes: 1,
            iLike: true
        }];
    }
}