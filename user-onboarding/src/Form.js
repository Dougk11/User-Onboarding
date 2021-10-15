
import React from 'react'

export default function Form (props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form>
            <h2>Add a user</h2>
            <div>{errors.name}</div>
            <div>{errors.email}</div>

            <div>
                <h3>Input Information</h3>
                <label>Name
                    <input
                    value= {values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>
                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>
                <label>Terms of Service
                    <input
                    checked={values.terms}
                    onChange={onChange}
                    name='terms'
                    type='checkbox'
                    />
                </label>
                <button onSubmit={onSubmit} />
            </div>
        </form>
    )
}