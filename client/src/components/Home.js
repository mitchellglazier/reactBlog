import React from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";
import { Header, } from "semantic-ui-react";
import IndvBlog from "./IndvBlog";

class Home extends React.Component {
  state = {
    blogs: []
  };

  getId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

addBlog = (blogData) => {
  const { blogs, } = this.state;
  const blog = { id: this.getId(), ...blogData, };
  this.setState({ blogs: [blog, ...blogs], });
};

editBlog = (blogData) => {
const blogs = this.state.blogs.map( blog => {
  if (blog.id === blogData.id)
    return blogData;
  return blog
});
this.setState({ blogs, });
}

renderBlogs = () => {
return this.state.blogs.map( blog => <Blog key={blog.id} {...blog} edit={this.editBlog} />)
};

  render() {
    return (
      <div>
        <Header as="h1">Blog Central</Header>
        <BlogForm add={this.addBlog} />
        { this.renderBlogs() }
      </div>
    )
  }
}

export default Home;
