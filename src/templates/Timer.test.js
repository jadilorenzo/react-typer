import React from 'react'
import Timer from './Timer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme'

describe('Typer', () => {
    it('works', () => {
        const wrap = mount(<Timer onEnd={()=>{}} on={true} time={0}/>)
        expect(wrap.text()).toContain('0:00')
    })
    it('counts time correctly for numbers up to ten', () => {
        const wrap = mount(<Timer onEnd={()=>{}} on={true} time={9}/>)
        expect(wrap.text()).toContain('0:09')
    })
    it('counts time correctly for numbers up to a minute', () => {
        const wrap = mount(<Timer onEnd={()=>{}} on={true} time={61}/>)
        expect(wrap.text()).toContain('1:01')
    })
})
