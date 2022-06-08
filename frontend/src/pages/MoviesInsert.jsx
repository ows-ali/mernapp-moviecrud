import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 50px 30px;
`

const Label = styled.label`
    margin: 5px;
`
const HelpText = styled.p`
    margin: 5px;
    opacity: 0.7;
    font-size:75%
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',

        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }


    handleIncludeMovie = async () => {
        const { name, rating} = this.state

        const payload = { name, rating }
        if (!name ) {
            alert("Please provide movie name")
            return
        }
        if ( !rating) {
            alert("Please provide rating")
            return
        }
        try {
            await api.insertMovie(payload).then(res => {
                window.alert(`Movie inserted successfully`)
                this.setState({
                    name: '',
                    rating: '',

                })
            })
        }
        catch(e){
         
            console.log('error inserting moview', e.message, e.response ,e.response.status)
        }
    }

    render() {
        const { name, rating } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />
                <HelpText>Range: 0.1 till 10</HelpText>



                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesInsert