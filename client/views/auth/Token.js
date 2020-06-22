import React from "react";
import { connect } from "react-redux";
import getUserInfo from "../../redux/actions/userAction";
class Token extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	async componentDidMount() {
		var { token } = this.props.match.params;
		localStorage.setItem("login-token", token);
		console.log(token);
		var token = await this.props.dispatch(getUserInfo(token));
		if (token.status) {
			this.props.history.push("/api/v1/tweets/list");
		}
	}
	render() {
		return <> token page</>;
	}
}
function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
	};
}
export default connect(mapStateToProps)(Token);
