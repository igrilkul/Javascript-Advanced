function solve(object) {

}
let solution = {
    call:function(object,argument){

        switch (argument)
        {
            case 'upvote':
            {
                object.upvotes+=1;
                break;
            }

            case 'downvote':
            {
                object.downvotes+=1;
                break;
            }

            case 'score':
            {
                let result=[];
                let upvotes = Number(object.upvotes);
                let downvotes = Number(object.downvotes);

                let reportedUpvotes;
                let reportedDownvotes;
                let difference = upvotes-downvotes;
                let rating;
                if(upvotes+downvotes>50)
                {
                    let inflation = Math.max(upvotes,downvotes);
                    reportedDownvotes=downvotes+0.25*inflation;
                    reportedUpvotes=upvotes+0.25*inflation;
                }
                else
                {
                    reportedUpvotes=upvotes;
                    reportedDownvotes=downvotes;
                }


                if(upvotes>0.66*(upvotes+downvotes) && upvotes+downvotes>=10)
                {
                    rating='hot';
                }
                else if(upvotes>100 && downvotes>100)
                {
                    if(difference>0)
                    {
                        rating='controversial';
                    }
                    else
                    {
                        rating='unpopular';
                    }
                }
                else
                {
                    rating='new';
                }

                return [reportedUpvotes,reportedDownvotes,difference,rating];


            }
        }
    }


};

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
console.log(solution.call(forumPost,'score'));

