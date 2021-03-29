import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('Logo', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Logo)
        expect(wrapper.vm).toBeTruthy()
    })
})


describe('store/favorites', () => {
    const localVue = createLocalVue()

    localVue.use(Vuex)

    let nuxtStore
    let store

    beforeAll(async() => {
        const storePath = `${process.env.buildDir}/store.js`
        nuxtStore = await
        import (storePath)
    })

    beforeEach(async() => {
        store = await nuxtStore.createStore()
    })

    describe('Favorites Stars', () => {
        let favoriteList

        beforeEach(() => {
            favoriteList = store.getters['favorite/getFavoriteList']
        })

        test('Getter is an array', () => {
            expect(_.isArray(favoriteList)).toBe(true)
        })
    })
})