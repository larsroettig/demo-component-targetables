import React from 'react';
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import {shape, string} from 'prop-types';

import defaultClasses from './freeGift.css';

const FreeGift = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (<div className={classes.root}>Free Gift</div>);
}

FreeGift.propTypes = {
    classes: shape({root: string})
};
FreeGift.defaultProps = {};
export default FreeGift;
