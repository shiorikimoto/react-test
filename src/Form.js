import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [moji, setMoji] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                content: moji
            }
        ])
        setMoji('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            value={moji}
            onChange={e => {
                setMoji(e.target.value)
            }}
/>
        </form>
    )
}

export default Form
