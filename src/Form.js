import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [moji, setMoji] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (!moji) {
            alert('何も入力していません')
        } else {
            addTodo(moji)
        }
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
