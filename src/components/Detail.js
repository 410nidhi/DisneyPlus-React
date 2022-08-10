import React from 'react'
import styled from 'styled-components'

function Detail() {
    return(
        <Container>
            <Background>
                <img src="https://img.freepik.com/free-vector/cute-young-dragon-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3544.jpg?w=2000" />
            </Background>

            <ImageTitle>
                <img src= "https://i.pinimg.com/736x/d6/80/11/d68011c2cf11925d254f06c07f317ac1.jpg" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src = "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src = "/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src = "/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>

            <SubTitle>jh,fiuarehtoejh</SubTitle>

            <Description>hefwrfhRO23PE2ESNDMBSJDBKDRGJEJRkjh MDBJERGEAORIJFwhejrjh2</Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
left:0;
z-index: -1;
opacity: 0.8;

img{
    width:100%;
    height:100%;
    object-fit: cover;
}
`

const ImageTitle = styled.div`
height: 30vh;
width: 35vw;
min-height: 170px;
min-width: 200px;
margin-top: 60px;
margin-bottom: 20px;

img{
    width:100%;
    height:100%;
    object-fit: cover; 
}
`

const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height:56px;
background: rgb(249, 249, 249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor:pointer;

&:hover {
    background: rgb(198, 198, 198);
}
`

const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`

const AddButton = styled.button`
height: 44px;
width: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
margin-right: 16px;

span{
    font-size: 30px;
    color: white;
}
`

const GroupWatchButton = styled(AddButton)`
background: black;
`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width: 760px;
`