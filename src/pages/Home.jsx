import { useState } from 'react';

import Grid from '@mui/material/Grid';


import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from "../components/Form";
import Result from "../components/Result";


const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',

})

const Home = () => {
    const [result, setResult] = useState({});






    return (
        <Component>
            <Grid flex container>
                <Grid sm={4} md={4}>
                    <Image></Image>
                </Grid>
                <Grid sm={12} md={8}>
                    <Box style={{ width: '73%', height: '80%' }}>
                        <Form setResult={setResult} />
                        <Result result={result} />
                    </Box>
                </Grid>
            </Grid>
        </Component>
    )
};

export default Home;


//
//             <Box style={{ width: '73%', height: '80%' }}>
//                 <Form setResult={setResult} />
//                 <Result result={result} />
//             </Box>