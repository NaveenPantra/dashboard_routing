import React from 'react'
import { useHistory } from 'react-router-dom';

export default function CallsGoBack() {
    const routerHistoryHook = useHistory();
    return (
        <p
            onClick={routerHistoryHook.goBack}
            style={{
                textAlign: 'left',
                cursor: 'pointer',
                display: 'span'
            }}>
            Back
        </p>
    )
}
