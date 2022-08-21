const Tweeter = function () {
    let nextAvailablePostId=3
    let nextAvailableCommentId=7
    _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function(){
        return _posts
    }

    const addPost = function(text){
        let post = {}
        post.text=text
        post.id = "p"+nextAvailablePostId
        nextAvailablePostId+=1
        post.comments=[]
        _posts.push(post)
    }

    const removePost = function(id){
        let indexToRemove=-1
        for(let index=0;index<_posts.length;index++){
            if(_posts[index]['id']===id){
                indexToRemove=index
            }
        }
        if(indexToRemove!=-1){ //found the post to delete
            _posts.splice(indexToRemove,1)
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost
    }
}

