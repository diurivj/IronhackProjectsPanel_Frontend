import React, {Component} from 'react';
import {AllStudentsSearch} from "./AllStudentsSearch";
import {Card, Button} from 'antd';
import AllStudentsList from "./AllStudentsList";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from '../../../../redux/actions/AdminActions/AdminStudentActions';

class AllStudentsContainer extends Component{

  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true
  };

  render(){
    const {students} = this.props;
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card title='All Students'  hoverable={true} style={{width: '80%'}}>
          <div style={{ display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'space-between', flexGrow:'1' }}>
            <AllStudentsSearch students={students}/>
            <Button>Puchame</Button> {/* Aquí tendrían que ir los demás filtros */}
            <AllStudentsList students={students}/>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  students: state.students
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(studentActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStudentsContainer);