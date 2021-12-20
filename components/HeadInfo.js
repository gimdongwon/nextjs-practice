import Head from 'next/head';

const HeadInfo = ({ title, content, keyword }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta content={content} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog powered by nextjs',
  content: 'practice next js',
};

export default HeadInfo;
