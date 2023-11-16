import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('[data-testid="name-input"]') // Find text input

    input.setValue('Dexter')  // Set value for text input
    wrapper.trigger('submit') // Simulate form submission
    
    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Dexter' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})