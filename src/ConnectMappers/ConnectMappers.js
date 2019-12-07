import React from 'react';

const Mappers = {
  mapDispatchToProps (dispatch, ownProps) {
    return {
      updateAuthentication: (authenticated) => {
        dispatch({
          type: 'UPDATE_AUTHENTICATION',
          payload: authenticated
        })
      }
    }
  },
  mapStateToProps (state) {
    return {
      authenticated: state.commonReducer.authenticated
    }
  }
};

export default Mappers;