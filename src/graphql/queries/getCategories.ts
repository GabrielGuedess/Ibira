const GET_CATEGORIES = /* GraphQL */ `
  query GET_CATEGORIES {
    categories {
      name
      id
      sub_categories {
        name
        id
      }
    }
    burgerimg {
      img {
        url
      }
    }
  }
`;

export default GET_CATEGORIES;
