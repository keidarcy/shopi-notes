import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../components/CodeBlock'
import Layout from '../../components/layout'

export default function Post({
  postData,
  allPostsData
}: {
  postData: {
    id: string
    title: string
    date: string
    content: string
  }
  allPostsData: {
    date: string
    title: string
    id: string
    content: string
  }[]
}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout posts={allPostsData}>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <ReactMarkdown source={postData.content} renderers={{ code: CodeBlock }} />
        </article>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  const allPostsData: { id: string; title: string; date: string }[] = getSortedPostsData()
  return {
    props: {
      postData,
      allPostsData
    }
  }
}
