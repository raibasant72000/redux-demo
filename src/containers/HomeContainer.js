import Home from '../components/Home'  // import component 
import {connect} from 'react-redux' // connect helps to connect react to redux
import {addToCart} from '../services/Actions/actions' // get the actions

const mapStateToProps=state =>({
    cardData:state.cardItems
})
const mapDispatchToProps= dispatch =>({
    addToCartHandler:data=> dispatch(addToCart(data)) // calling action

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)


// export default Home;