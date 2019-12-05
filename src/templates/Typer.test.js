import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme'

import Typer from './Typer'

describe('Typer', () => {
  it('works', () => {
    const wrap = mount(<Typer text={'test'}/>)
    expect(wrap.text()).toEqual('test')
  })
})