/**
 *创建时间:
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
import React from 'react';
import { withRouter } from 'dva/router';
import { connect } from 'dva';
import HomeHeader from '../../../components/BasicLayout/Header';

@connect(state => ({
  home: state.home,
  login: state.login,
  user: state.user,
}))
class PCHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
      currentUser: this.props.currentUser,
    };
  }
  componentWillReceiveProps(nextProps) {
    const status = nextProps.login.status || nextProps.user.status;
    console.log(' nextProps.login.status || nextProps.user.status', nextProps.user.status);
    this.setState({
      status,
      currentUser: nextProps.user.currentUser,
    });
    setTimeout(() => {
      console.log('currentUser', this.state.currentUser);
    }, 0);
  }
  onMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch({
        type: 'login/logout',
      });
    }
  }
  onTitleMenuClick=() => {
    this.props.history.push('/main/Home');
  }
  render() {
    return (
      <HomeHeader
        status={this.state.status}
        currentUser={this.state.currentUser}
        onMenuClick={this.onMenuClick}
        onTitleMenuClick={this.onTitleMenuClick}
      />
    );
  }
}

export default withRouter(PCHeader);
