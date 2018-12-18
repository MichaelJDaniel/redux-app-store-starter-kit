import React from "react"
import { connect, } from "react-redux"
import { addApp, updateApp } from "../reducers/apps"
import { Form } from "semantic-ui-react"

class AppForm extends React.Component {
  initialState = {
    name: "",
    description: "",
    catagory: "",
    price: "",
    version: "",
    author: "",
  }

  state = {...this.initialState, }

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const app = {...this.state}
    const { dispatch, closeForm, } = this.props;
    const func = this.props.id ? updateApp : addApp
    dispatch(func(app))
    closeForm()
  }
  render() {
    const { name, description, category, version, price, author, } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="version"
          defaultValue={version}
          onChange={this.handleChange}
          label="Version"
        />
        <Form.Input
          name="price"
          defaultValue={price}
          type="number"
          min="0"
          onChange={this.handleChange}
          label="Price"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(AppForm); 