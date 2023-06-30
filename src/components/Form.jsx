import { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import getWeather from '../services/api';
import Grid from '@mui/material/Grid';


const Container = styled(Box)({
    background: "#445A6F",
    padding: 10
});

const Input = styled(InputBase)({
    color: '#fff',
    marginRight: 20,

    fontSize: 18
});

const GetButton = styled(Button)({
    backgroundColor: '#e67e22',
})


const Form = ({ setResult }) => {

    const [data, setData] = useState({ city: '', country: '' })



    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    };

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return <Container >
        <Grid container flex spacing={0}>
            <Grid sm={6} md={4}>
                <Input
                    placeholder='city'
                    onChange={(e) => handleChange(e)}
                    name="city"
                />
            </Grid>

            <Grid sm={6} md={4}>
                <Input
                    placeholder='country'
                    onChange={(e) => handleChange(e)}
                    name="country"
                />
            </Grid>

            <Grid sm={12} md={4}>
                <GetButton
                    alignItems="center"
                    variant="contained"
                    onClick={() => getWeatherInfo()}
                >Get Weather</GetButton>
            </Grid>

        </Grid>





    </Container>
}

export default Form;