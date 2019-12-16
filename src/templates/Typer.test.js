import React from 'react'
import Typer from './Typer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { mount } from 'enzyme'

const pressKey = (wrap, letter) => {
  wrap.find('input').simulate('change', {
    target: { value: letter }
  })
}

describe('Typer', () => {
    it('works', () => {
        const wrap = mount(<Typer text={'test'}/>)
        expect(wrap.text()).toContain('test')
    })

    it('recieves a character', () => {
        const wrap = mount(<Typer text={'test'}/>)
        wrap.find('input').simulate('change', {
          target: { value: 'hello t' }
        })
        expect(
          wrap.containsMatchingElement(
            <input value='t'/>
          )
        ).toBeTruthy()
    })

    it("recieves a character but doesn\'t take a mistake", () => {
        const addMissed = () => {
          let missed = 1
        }
        const wrap = mount(<Typer addMissed={addMissed}text={'test'}/>)
        wrap.find('input').simulate('change', {
          target: { value: 'ht' }
        })
        expect(
          wrap.containsMatchingElement(
            <input value='t'/>
          )
        ).toBeTruthy()
    })

    it("will tell when the text has been finished", () => {
      let finished = false
      const onFinish = () => {
        finished = true
      }
      const wrap = mount(<Typer addMissed={() => {}} onFinish={onFinish} text={'test'}/>)

      pressKey(wrap, 't')
      pressKey(wrap, 'e')
      pressKey(wrap, 's')
      pressKey(wrap, 't')
      pressKey(wrap, '')

      expect(finished).toBeTruthy()
    })


})
