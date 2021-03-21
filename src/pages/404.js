import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404 Not Found" description="ページが見つかりません" />
      <div style={{
        margin: "40px auto",
        textAlign: "center"
      }}>
        <h1>404 Not Found</h1>
        <h1>お探しのURLは存在しません。</h1>
        <Link to="/">トップページへ</Link>
      </div>
    </Layout>
  )
}