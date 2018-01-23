import React from 'react';
import Enzyme , {shallow, find} from 'enzyme';
import ShowroomForm from '../components/ShowroomForm';
import Adapter from 'enzyme-adapter-react-16';

describe("#TS#ViewTest## ShowroomForm tests" , () => {

    test("#TC#ViewTest## Should return success for submission",() => {
        const form = shallow(<ShowroomForm />);
        var input = form.find('input').at(0);
        input.simulate('change',{
            currentTarget : {
                getProperty : function(id){
                    return 'city';
                },
                value : 'istanbul'
            } , });
        var submitButton = form.find('input').at(2);
        submitButton.simulate('submit');
        expect(form.state('city')).toBe('istanbul');
    });
});