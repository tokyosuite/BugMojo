import { connect } from 'react-redux'; 
import SignUpForm from './sign_up_form'; 
import { signup } from '../../actions/sessionActions'; 

const mapStateToProps = state => ({
    newUser: {
        username: '', 
        email: '', 
        password: '', 
        emailError: '', 
        passwordError: ''
    }
}); 

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm); 