const Renderer = function() {
    const renderPosts=function(posts){
        $("#posts").empty();
        for(let i=0;i<posts.length;i++){
            let currentPost = posts[i]
            let currentPostId = currentPost.id
            let currentPostText = currentPost.text
            let currentPostComments = currentPost.comments
            const postDiv = $(`<div class="post" data-id="${currentPostId}"><h1 class="post-text">"${currentPostText}"</h1></div>`)       
            $("#posts").append(postDiv)
            for(let j=0;j<currentPostComments.length;j++){
                let currentCommentId = currentPostComments[j].id
                let currentCommentText = currentPostComments[j].text
                const commentDiv = $(`<div class="comment" data-id="${currentCommentId}"><h3 class="comment-text">"${currentCommentText}"</h3></div>`)
                postDiv.append(commentDiv)
            }
    
        }
    
    }
    return {
        renderPosts: renderPosts
    }
}