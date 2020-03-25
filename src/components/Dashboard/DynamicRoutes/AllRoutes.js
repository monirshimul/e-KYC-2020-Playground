import React from 'react';

import MultiForm from '../../Multi-Form/UserForm'
import Basic from '../../Multi-Form/UserBasicDetails'
import Personal from '../../Multi-Form/UserPersonalDetails'
import Confirm from '../../Multi-Form/Confirm'
import Success from '../../Multi-Form/Success'
import Sample from './Sample';


export const RouteName = [
    {
        "id": 1,
        "featureName": "MultiForm",
        "path": "/",
        "exact": true,
        "component": <MultiForm />
    },

    {
        "id": 2,
        "featureName": "Basic",
        "path": "/Basic",
        "exact": true,
        main: () => <Basic />
    },

    {
        "id": 3,
        "featureName": "Personal",
        "path": "/Personal",
        "exact": true,
        "component": <Personal />
    },

    {
        "id": 4,
        "featureName": "Confirm",
        "path": "/Confirm",
        "exact": true,
        "component": <Confirm />
    },

    {
        "id": 5,
        "featureName": "Success",
        "path": "/Success",
        "exact": true,
        "component": <Success />
    },
    {
        "id": 6,
        "featureName": "Sample",
        "path": "/Sample",
        "exact": true,
        "component": <Sample />
    }



];

const featureArray = ["MultiForm", "Basic", "Personal", "Confirm", "Success", "Sample"];


export const routes = [];


featureArray.map((val1, i) => {
    return RouteName.map((val2, index) => {
        if (RouteName[index].featureName === featureArray[i]) {
            return routes.push(RouteName[index]);
        }
    })
})


