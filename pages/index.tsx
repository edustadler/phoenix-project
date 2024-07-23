import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import CustomerLogos from "../components/customer-logos";

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges.slice();

  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js and Latticeflow AI</title>
      </Head>
      <Container>
        <Intro />
      </Container>
      <CustomerLogos />
      <Container>
        {morePosts.length > 0 &&
          (
            <>
              <MoreStories posts={morePosts} className={'my-16 px-0 columns-2 m-auto justify-center 2xl:grid-cols-3'}/>
            </>
          )}

      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
