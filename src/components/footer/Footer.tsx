import { Container, Grid, Divider, TextField, Button, Rating } from "@mui/material";
import logo from "../../assets/2.jpg";
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Internal CSS
const CustomTextField = styled(TextField)`
    width: 100%;
    .MuiInputLabel-root {
        font-family: inherit;
    }
`

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#gold',
    },
    '& .MuiRating-iconHover': {
      color: '#gold',
    },
});

// Create Component Function
function Footer() {
    return (
        <>
            <Container fixed sx={{ mt: 2 }}>
                <div
                  style={{ display: "flex" }}
                >
                    <img src={logo} /> 
                    <Grid container spacing={1} sx={{ ml: 2 }}>
                        <Grid item xs={12} sx={{ mt: -2 }}>
                            <h2>Daenerys Targaryen</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: -1 }}>
                            <h2>Character</h2>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: -3 }}>
                            <span>
                                Daenerys Targaryen is the daughter of King Aerys II Targaryen (also referred to as "The Mad King")
                                and his sister-wife Queen Rhaella, and is one of the last survivors of House Targaryen. She serves as
                                the third-person point-of-view character of 31 chapters of A Game of Thrones, A Clash of Kings, A
                                Storm of Swords, and A Dance with Dragons. This makes her the series' fourth most prominent
                                narrative voice after Tyrion Lannister, Jon Snow and Arya Stark.
                            </span>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Container fixed sx={{ mt: 2 }}>
                <div
                  style={{ display: "flex" }}
                >
                    <iframe width="800" height="242" src="https://www.youtube.com/embed/Ydi80YrCnPY?si=SN5chJDCF6RVR6Ok" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <Grid container spacing={1} sx={{ ml: 2 }}>
                        <Grid item xs={12} sx={{ mt: -2 }}>
                            <h2>Personality</h2>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: -3 }}>
                            <span>
                                Daenerys is most often described as uncommonly beautiful, with long, pale silver-gold hair
                                and purple eyes. She is slender and pale, although taller than some of her female
                                ancestors. Tales of Daenerys's beauty are numerous, and throughout the novels she
                                encounters countless suitors who seek her hand in marriage, sometimes to gain control of
                                her three dragons. She is fluent in the Common Tongue of Westeros, Dothraki, High
                                Valyrian and bastard Valyrian, which she speaks with a Tyroshi accent. Over the course of
                                the first three novels she becomes fluent in the Dothraki language and Ghiscari, spoken in
                                the slave cities in Essos.
                            </span>
                        </Grid>
                    </Grid>
                </div>
                <Divider sx={{ mt: 4 }} />
                <h3>Comment</h3>
                <CustomTextField
                  id="outlined-multiline-static"
                  label="What do you feel about this?"
                  multiline
                  rows={5}
                />
                <Grid container spacing={1} sx={{ mt: 2, alignItems: 'end' }}>
                    <Grid item xs={6}>
                        <StyledRating
                          name="customized-color"
                          getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                          precision={0.5}
                          icon={<FavoriteIcon fontSize="inherit" />}
                          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default Footer;