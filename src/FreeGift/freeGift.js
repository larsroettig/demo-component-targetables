import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { BrowserPersistence } from '@magento/peregrine/lib/util';

import defaultClasses from './freeGift.css';
const storage = new BrowserPersistence();

const FreeGift = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { locale } = useIntl();

    const value = 20; // schould be fetch via graphql

    // fetchs the current currency from storage price compont
    const currencyCode = storage.getItem('store_view_currency') || 'USD';

    // sample to format a number price comp cloud be used here instad
    const amount = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode
    }).format(value);

    return (
        <div className={classes.root}>
            <span>
                <FormattedMessage
                    id="freeGift" // Description should be a string literal
                    defaultMessage="Free Gift if you order for more then <b>{amount}</b>" // amount should be a string literal
                    values={{
                        amount,
                        // replace <b> tag via span with blod styling
                        b: chunks => (
                            <span className={classes.msg}>{chunks}</span>
                        )
                    }}
                />
            </span>
        </div>
    );
};

FreeGift.propTypes = {
    classes: shape({ root: string, msg: string })
};

FreeGift.defaultProps = {};
export default FreeGift;
