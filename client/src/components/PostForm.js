import React from "react";
import { Form, } from "semantic-ui-react";

class PostForm extends React.Component {
  state = { title: "", description: "", body: "", date: "" };

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, description: this.props.description, body: this.props.body, date: this.props.date, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
    this.props.add(this.state);
  }
    this.setState({ title: "", description: "", body: "", date: "", });
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
            placeholder="Description"
            label="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
            />
          <Form.Input
            placeholder="Body"
            label="Body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
            />
          <Form.Input
            placeholder="Date"
            label="Date"
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
            />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

export default PostForm;
