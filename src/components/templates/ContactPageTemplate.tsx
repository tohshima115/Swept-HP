import React from 'react';
import {
    Container,
    Grid,
} from '@mui/material';
import ContactDetails from '../organisms/ContactDetails';
import { Heading1 } from '../atoms/typography';
import ContactSection from '../organisms/ContactSection';

const ContactPageTemplate: React.FC = () => {

    return (
        <Container maxWidth="md" sx={{ mt:3,mb:5  }}>
            <Heading1 titleEn={'Contact'} titleJa={'お問い合わせ'} />
            <Grid container columnSpacing={3} rowSpacing={8}>
                <Grid size={{xs:12,md:8}} >
                    <ContactSection />
                </Grid>
                <Grid size={{xs:12,md:4}} >
                    <ContactDetails />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPageTemplate; 