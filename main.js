const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


/*

tweeter.addPost("Third Tweet")
//updatesPosts=tweeter.getPosts
//console.log(updatesPosts)
//tweeter.removePost("p2")
//tweeter.addComment("p3","Seventh comment")
//tweeter.removeComment("p1","c3")
tweeter.addComment("p3","Seventh comment")
tweeter.removeComment("p3","c7")
renderer.renderPosts(tweeter.getPosts())

*/
const post = function(){  //this function is invoked when the Tweet button is pressed.
    let postText = $("#input").val();
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
}


$("body").on("click", ".deletePost", function() {
    console.log("Enters body delete")
    let postId =  $(this).closest(".post").attr("data-id") 
    console.log(postId)
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
  });


  $("body").on("click", ".clickForComment", function() {
    let commentText = $(this).siblings(".inputComment").val()
    console.log(commentText)
    let relevantPostId = $(this).closest(".post").attr("data-id")
    console.log(relevantPostId)
    tweeter.addComment(relevantPostId,commentText)
    renderer.renderPosts(tweeter.getPosts())
  });

  $("body").on("click", ".delete-comment", function() {
    let relevantCommentId = $(this).closest(".comment").attr("data-id")
    let relevantPostId = $(this).closest(".post").attr("data-id")
    tweeter.removeComment(relevantPostId,relevantCommentId)
    renderer.renderPosts(tweeter.getPosts())
  });


