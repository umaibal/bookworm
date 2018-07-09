import{gql} from 'apollo-boost';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($product: ProductInput!) {
    createProduct(input: $product) {
      product {
        id
        title
      }
    }
  }
`;

export default CreateProductsMut;
