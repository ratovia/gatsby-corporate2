import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Hero from "../components/Hero/hero"
// import News from "../components/News/news"
// import CompanySummary from "../components/CompanySummary/companySummary"
// import ServiceSummary from "../components/ServiceSummary/serviceSummary"
// import RecruitSummary from "../components/RecruitSummary/recruitSummary"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <Layout>
      <SEO title="" description="" />
      <Hero />
      {/* <News news={data.allMysqlNotifications.edges}/>
      <CompanySummary />
      <ServiceSummary />
      <RecruitSummary /> */}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMysqlCompanies {
    edges {
      node {
        business_detail
        capital_stock
        ceo
        corporate_name
        employee_number
        foundation
        headquarters
        id
      }
    }
  }
  allMysqlNotifications {
    edges {
      node {
        content
        title
        created_at
      }
    }
  }
  allMysqlRecruits {
    edges {
      node {
        application_conditions
        access
        character_image
        created_at
        employment_status
        job_detail
        other
        role_name
        salary
        sammary
        treatment_welfare_benefits
        working_hours_weekday
        working_place
      }
    }
  }
}
`