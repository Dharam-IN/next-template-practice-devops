import Head from 'next/head';

const CustomHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Add more meta tags as needed */}
    </Head>
  );
};

export default CustomHead;