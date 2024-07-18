import axios from "axios";
import Customspinner from "../../customspinner/customspinner";

const { Component } = require("react");

class ProductListing extends Component {
  //state = {
  //  productListing: [],
  //  loading: false,
  //  error: null,
  //};

  constructor(){
    super();
    this.state={
      productListing: [],
      loading: false,
      error: null,
    }
    }

  componentDidMount() {
    console.log("componentDidMount invoked...");
    document.title="My project";
    //this.fetchData();

  }

 

  fetchData = async () => {
    this.setState({
      loading: true,
    });
    try {
      const response1 = await axios.get("https://fakestoreapi.com/products");
      console.log(response1, "response1");

      if (response1.status === 200) {
        this.setState({
          productListing: response1.data,
          loading: false,
        });
      }
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Server is busy",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    console.log("render invoked...");
    return (
      <>
        <h3>Product Listing page</h3>

        {this.state.loading ? (
          <>
            <h3>Please wait ....</h3>
            <Customspinner/>
          </>
        ) : (
          <div>
            {this.state.productListing.map((eachObject) => {
              return <h3 key={eachObject.id}>{eachObject.title}</h3>;
            })}
          </div>
        )}
      </>
    );
  }
}

export default ProductListing;