// Write your JS code here
import './index.css'
import {Component} from 'react'

class BlogList extends Component {
  render() {
    const {blog} = this.props
    const {title, description, publishedDate} = blog
    return (
      <>
        <li className="li-container">
          <div className="title-date-container">
            <h1 className="title">{title}</h1>
            <p className="published-date">{publishedDate}</p>
          </div>
          <p className="description">{description}</p>
        </li>
      </>
    )
  }
}

export default BlogList
