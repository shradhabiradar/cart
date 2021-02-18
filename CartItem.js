import React from 'react';

const CartItem = (props) => {
    // constructor(){
    //     super();
    //     this.state ={
    //         price: 999,
    //         title: 'Mobile phone',
    //         qty: 1,
    //         img: ''
    //     }
    //  }
    //  increaseQuantity = () => {
        //  this.state.qty += 1;
        //  console.log('this', this.state);
         //form 1
        //  this.setState({
        //      qty: this.state.qty + 1
        //  });

        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty + 1
        //     }
        // }, () => {
            // console.log('this.state', this.state);
            //this is the call back function, this is called when state finishes the updating
    //     })
    //  }

    //  decreaseQuantity = () => {
    //      const {qty} =this.state;
    //      this.setState((prevState) =>{
    //          if(qty == 0){
    //              return;
    //          }
    //         return{
    //             qty: prevState.qty - 1
    //         }
    //      })
    //  }
    
        // console.log('this.props', this.props)
        const {price, title, qty } = props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props
        return(
            <div className = "cartItem">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 15}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase"
                            className="action-icons"
                            src="https://as1.ftcdn.net/jpg/02/51/03/82/500_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg"
                            onClick={()=> props.onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease"
                            className="action-icons"
                            src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                            onClick= {()=> props.onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete"
                            className="action-icons"
                            src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                            onClick={() => props.onDeleteProduct(product.id)}
                        />
                    </div>
                </div>

            </div>
        )
    }


//styling from objects
const styles = {
    image: {
        height: 50,
        width: 50,
        borderRadius: 3,
        background: '#ccc'
    }
    
}


export default CartItem;