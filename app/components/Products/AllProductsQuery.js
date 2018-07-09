import{gql} from 'apollo-boost';

const ALL_PRODUCTS = gql`
  query {
    Shop(id: "7776567411") {
      name
      products {
        id
        title
      }
    }
  }
`;

export default AllProductsQuery;
