// import client from 'graphql/client';
// import GET_CATEGORIES from 'graphql/queries/getCategories';
// import { GetStaticProps } from 'next';

import Home from 'templates/Home';
// import { CategoriesProps } from 'types/api';

export default function Index() {
  return <Home />;
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { categories, burgerimg } = await client.request(GET_CATEGORIES);
//   return {
//     props: {
//       categories,
//       burgerimg,
//     },
//   };
// };
