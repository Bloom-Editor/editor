import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Clock from '../../src/components/Clock'

function setup(value = 0) {
  const actions = {
    onStart: expect.createSpy(),
    onStop: expect.createSpy(),
    onReset: expect.createSpy()
  }
  const component = shallow(
    <Clock value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('Clock component', () => {

  it('renders three buttons', () => {
    const { buttons } = setup();
    expect(buttons.length).toEqual(3);
  });

})
