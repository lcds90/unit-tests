import { mount, flushPromises } from '@vue/test-utils'
import PostList from './axiosExample.vue'
import { expect, it, vi } from 'vitest'
import axios from 'axios'

const mockPostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' }
]
vi.mock('axios')

it('loads posts on button click', async () => {
  const wrapper = mount(PostList)
  const mockedFetch = vi.mocked(axios, true)
  
  mockedFetch.get.mockResolvedValue({ data: mockPostList })
  console.log('Antes da requisição feita')
  console.log(wrapper.html())
  await wrapper.get('button').trigger('click')

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')

  await flushPromises()

  const posts = wrapper.findAll('[data-test="post"]')
  console.log('\nDepois da requisição feita')
  console.log(wrapper.html())
  expect(posts).toHaveLength(2)
  expect(posts[0].text()).toContain('title1')
  expect(posts[1].text()).toContain('title2')
})

// LINK https://pinia.vuejs.org/cookbook/testing.html
// LINK https://test-utils.vuejs.org/guide/advanced/vue-router
