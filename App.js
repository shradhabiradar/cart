import React from 'react';
// import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'
import  firebase from 'firebase/app';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],//fetching data from firebase
        loading: true
    }
}

//api call by componentdidmount
componentDidMount (){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     });

  //     const products =  snapshot.docs.map((doc) => {

  //       const data = doc.data();

  //       data['id'] = doc.id;
  //       return data;
  //     });

  //     this.setState({
  //       products,
  //       loading:false
  //     });

  //   })


  //automatically updated when there is a change in the data
  firebase
    .firestore()
    .collection('products')
    // .where('price', '==', 100)
    //sort date according to price:
    .orderBy('price')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products =  snapshot.docs.map((doc) => {

        const data = doc.data();

        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading:false
      });

    })
}

handleIncreaseQuantity = (product) =>{
    // console.log('hey increase the quantity of product', product)
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //     products: products
    // })
    const docref = firebase.firestore().collection('products').doc(products[index].id);

    docref
    //update is a promis
      .update({
        qty: products[index].qty +1
       })
       .then(() => {
         console.log("updated successfully");
       })
       .catch((error) => {
         console.log("error in updating", error);
       })
}
handleDecreaseQuantity =(product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0 ) {
        return;
    }

    // products[index].qty -= 1;
    // this.setState({
    //     products:products
    // })

    const docref = firebase.firestore().collection('products').doc(products[index].id);

    docref
    //update is a promis
      .update({
        qty: products[index].qty -1
       })
       .then(() => {
         console.log("updated successfully");
       })
       .catch((error) => {
         console.log("error in updating", error);
       })
}

handleDeleteProduct =(id) => {
    const {products} = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //     products: items
    // })  
    const docref = firebase.firestore().collection('products').doc(id); 
    docref
      .delete()
      .then(() => {
        console.log("successfully deleted");
      })
      .catch((error) => {
        console.log("error", error);
      })
}
getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal =() =>{
  const {products} = this.state;
  let count =0;

  products.forEach((product) => {
    count = count + product.qty * product.price
  })
  return count;

}

addProduct = () =>{
  firebase
    .firestore()
    .collection('products')
    .add({
      img: "", 
      price: 300,
      qty: 3,
      title: 'washing machine'
    })
    .then((docref) => {
      console.log("product has been added", docref)
    })
    .catch((error) => {
      console.log("error in adding the product", error);
    })
}

  render(){
  const {products, loading} = this.state;
    return (
      <div className="app">
        <Navbar 
        count = {this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style={{padding: 9, fontSize: 10}}>Add Product</button> */}
        <Cart
        products = {products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct ={this.handleDeleteProduct} 
        />
        {loading && <h1>Loading products ....</h1>}
        <div>
          total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}
    


export default App;
