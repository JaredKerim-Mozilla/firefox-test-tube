import React from 'react';
import { connect } from 'react-refetch';

import Home from '../views/Home';
import Loading from '../views/Loading';
import Error from '../views/Error';


const HomeContainer = props => {
    const experimentsFetch = props.experimentsFetch;

    if (experimentsFetch.pending) {
        return <Loading />;
    } else if (experimentsFetch.rejected) {
        return <Error message={experimentsFetch.reason.message} />;
    } else if (experimentsFetch.fulfilled) {
        return (
            <Home experiments={experimentsFetch.value} />
        );
    }
};

export default connect(() => ({
    experimentsFetch: { url: `${process.env.REACT_APP_API_URL}/experiments`, refreshInterval: Number(process.env.REACT_APP_REFRESH_INTERVAL) },
}))(HomeContainer);
