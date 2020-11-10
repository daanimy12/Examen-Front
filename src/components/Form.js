import React, { useState } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'
import { Redirect } from 'react-router-dom'
const { Field, Control, Label, Input } = BulmaForm;

const Form = (props) => {
    const [formValues, setFormValue] = useState({})
    const handeChange = (e) => {
        const { name, value } = e.target
        setFormValue(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = formValues;
        props.addProduct(data)
        setFormValue('')


    }
    return (
        
            <form onSubmit={handleSubmit}>
                <Field>
                    <Label>sku</Label>
                    <Control>
                        <Input
                            placeholder="Text input"
                            name="sku"
                            value={formValues.sku}
                            onChange={handeChange}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label>name</Label>
                    <Control>
                        <Input
                            placeholder="Text input"
                            name="name"
                            value={formValues.name}
                            onChange={handeChange}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label>quantity</Label>
                    <Control>
                        <Input
                            placeholder="Text input"
                            name="quantity"
                            value={formValues.quantity}
                            onChange={handeChange}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label>price</Label>
                    <Control>
                        <Input
                            placeholder="Text input"
                            name="price"
                            value={formValues.price}
                            onChange={handeChange}
                        />

                    </Control>
                </Field>

                <Button id="btn-add" type="submit" color="primary">
                    Save
            </Button>
                <Redirect to="/" />
            </form>
       
    )
}
export default Form;