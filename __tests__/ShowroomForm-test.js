import React from 'react';
import Enzyme , {shallow, find} from 'enzyme';
import ShowroomForm from '../components/ShowroomForm';
import Adapter from 'enzyme-adapter-react-16';

describe("Showroom Form tester" , () => {

    test("Should return success for submission",() => {
        const form = shallow(<ShowroomForm />);
        var submitButton = form.find('input').at(2);
        submitButton = submitButton.simulate('change',{
            currentTarget : {
                getProperty : function(id){
                    return 'city';
                },
                value : 'i'
            } , });
        submitButton.simulate('change',{
            currentTarget : {
                getProperty : function(id){
                    return 'city';
                },
                value : 'is'
            } , });
        submitButton.simulate('change',{
            currentTarget : {
                getProperty : function(id){
                    return 'city';
                },
                value : 'istanbul'
            } , });
        expect(submitButton.state['city']).toBe('istanbul')
    });
});