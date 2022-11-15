import { connect } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer";
import Contacts from "./Contacts";

let mapStateToProps = (state) => {
  return {
    messege: state.messeges,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onPost: (text) => {
      dispatch(onPostChangecreateActin(text));
    },
    addPost: () => {
      dispatch(addPostcreateActin());
    },
  };
};

const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

export default ContactsContainer;
