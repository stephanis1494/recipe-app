import React, { Component } from "react"
import { Link } from "react-router-dom"
import { css } from "glamor"

export default class Nav extends Component {
  render() {
    return(
      <div {...css(styles.container)}>
        <h1 {...css(styles.header)}> Recipe App </h1>
        <Link to="/" {...css(styles.Link)}> Recipes </Link>
        <Link to="/addrecipe" {...css(styles.link)}> Add Recipe </Link>
      </div>
    )
  }
}

const styles = {
  link: {
    textDecoration: "none",
    marginLeft: 15,
    color: "white",
    ":hover": {
      textDecoration: "underline"
    }
  },
  container: {
    display: "flex",
    backgroundColor: "#00c334",
    padding: "0px 30px",
    alignItems: "center"
  },
  heading: {
    color: "white",
    paddingRight: 20
  }
}
