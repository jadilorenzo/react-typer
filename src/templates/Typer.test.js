import React from 'react'
import Typer from './Typer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme'

describe('Typer', () => {
    it('works', () => {
        const wrap = mount(<Typer text={'test'}/>)
        expect(wrap.text()).toContain('test')
    })
})
