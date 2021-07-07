// Write your JS code here
import './index.css'
import {Component} from 'react'
import BlogList from '../BlogList'

class BlogItem extends Component {
  render() {
    const {blogsData} = this.props
    return (
      <ul className="ul-container">
        {blogsData.map(eachBlog => (
          <BlogList blog={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }
}

export default BlogItem
