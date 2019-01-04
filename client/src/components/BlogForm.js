import React from "react";
import { Form, } from "semantic-ui-react";

class BlogForm extends React.Component {
  state = { title: "", catagory: "", };

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, catagory: this.props.catagory, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
    this.props.add(this.state);
  }
    this.setState({ title: "", catagory: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Title"
            label="Title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            />
          <Form.Input
            placeholder="Catagory"
            label="Catagory"
            name="catagory"
            onChange={this.handleChange}
            value={this.state.catagory}
            />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

export default BlogForm;
