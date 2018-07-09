import{gql} from 'apollo-boost';

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($product: ProductInput!) {
    deleteProduct(input: $product) {
      product {
        id
        title
      }
    }
  }
`;

export default DeleteProductsMut;
