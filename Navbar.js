import React from 'react';

//this nav barr doesnot have any state so we will convert that into a function

const Navbar = (props) => {
    
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img
                    style={styles.cartIcon}
                    alt="cartimage"
                    src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1613477986~hmac=63200feea5f240e3232e86aca3a4e060"
                    />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
    }

const styles = {
    cartIcon: {
      height: 25,
      marginRight: 15
    },
    nav: {
      height: 35,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      fontSize:10,
      background: 'yellow',
      borderRadius: '50%',
      padding: '3px 6px',
      position: 'absolute',
      right: 5,
      top: -3
    }
  };
  
export default Navbar;