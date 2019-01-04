import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import { Header, } from "semantic-ui-react";

class Blog extends React.Component {
  state = {
    posts: []
  };

  getId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

addPost = (postData) => {
  const { posts, } = this.state;
  const post = { id: this.getId(), ...postData, };
  this.setState({ posts: [post, ...posts], });
};

editPost = (postData) => {
const posts = this.state.posts.map( post => {
  if (post.id === postData.id)
    return postData;
  return post
});
this.setState({ posts, });
}

deletePost = (id) => {
  const posts = this.state.posts.map( post => {
    if (post.id !== id)
      return post
  });
    this.setState({ posts: [...posts], });
  };

renderPosts = () => {
return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} delete={this.deletePost} />)
};

  render() {
    return (
      <div>
        <Header as="h1">{this.props.title}</Header>
        <PostForm add={this.addPost} />
        { this.renderPosts() }
      </div>
    )
  }
}

export default Blog;
