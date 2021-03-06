import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

//import Exercise from '../lib/Exercise';
import SetList from '../lib/SetList';
import SetItem from '../lib/SetItem';
//import EditSetItemForm from '../lib/EditSetItemForm';

describe('<SetList/>', () => {

  it('should be able to render set list correctly', () => {
    const wrapper = shallow(<SetList setList={[]}/>);
    wrapper.setProps({ 
      setList: [
        {id: 1, rep: 12, kg: 30},
        {id: 2, rep: 10, kg: 30},
        {id: 3, rep: 8, kg: 40},
        {id: 4, rep: 6, kg: 40}
      ],
    });
    expect(wrapper.find(SetItem)).to.have.length(4);
  });

});