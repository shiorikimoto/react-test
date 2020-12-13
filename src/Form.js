import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log('value: ', value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
    type='text'
    onChange={e => {
        setValue(e.target.value)
    }}
/>
        </form>
    )
}

export default Form
