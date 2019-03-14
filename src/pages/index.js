import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Link to="/about">To about page</Link>
    <Link to="/contact">To contact page</Link>
    <Header headerText="Hello Gatsby!" subtitleText="Wowza, it's a ringer!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
