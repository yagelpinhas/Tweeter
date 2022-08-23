const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())




tweeter.addPost("Third Tweet")
//updatesPosts=tweeter.getPosts
//console.log(updatesPosts)
//tweeter.removePost("p2")
//tweeter.addComment("p3","Seventh comment")
//tweeter.removeComment("p1","c3")
tweeter.addComment("p3","Seventh comment")
tweeter.removeComment("p3","c7")
renderer.renderPosts(tweeter.getPosts())