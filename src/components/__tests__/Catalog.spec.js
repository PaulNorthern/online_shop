import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MainWrapper from "../MainWrapper.vue";

// describe('Test', () => {
//     const wrapper = shallowMount(Catalog)
//
//     test('Component Renders', () => {
//         expect(wrapper.exists()).toBeTruthy()
//     })
//
//     describe('Click method', () => {
//         test(`to return 'clicked'`, () => {
//             expect(wrapper.vm.click()).toEqual('clicked')
//         })
//     })
// })

describe('WeatherHeader.vue Test', () => {
    it('renders message when component is created', () => {
        // render the component
        const wrapper = shallowMount(MainWrapper)

        // check that the Component Renders
        expect(wrapper.exists()).toBeTruthy()

        // check that the title is rendered
        // expect(wrapper.text()).toMatch('Vue Project')
    })
})


