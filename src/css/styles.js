import {styled} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";

const MyButton = styled(Button)({
    background: "#C53B22",
    borderRadius: 3,
    color: '#ebbdb5',
    margin: '10%',
    padding: '1%',
});

const MyBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    padding: '5%',
});

const PokeBox = styled(Box)({
    maxBlockSize: '20%',
    flexBasis: '20%',
    padding: '2%',
    margin:'2%',
    boxSizing: "border-box",
    border: 'solid',
    borderRadius: '10%',
    backgroundColor: '#fffff0'
});

const AbilitiesBox = styled(Box)({
    maxBlockSize: '15%',
    flexBasis: '5%',
    textAlign: 'left',
    padding: '2%',
    margin:'2%',
    boxSizing: "border-box",
});

const MyHeader = styled(Box)({
    marginTop: "8%",
    marginBottom: "2%",
    textAlign: "center",
    fontSize:'3vw'
});

const MyToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "safe center",
    color: "#add8e6"
});

const MyLightLink = styled(Link)({
    textDecoration: "none",
    color: "#49495A",
    display: "flex-start"
});

const MyDarkLink = styled(Link)({
    textDecoration: "none",
    color: "#add8e6"
});



export {MyBox, MyButton, MyHeader, PokeBox, MyToolbar, MyLightLink, MyDarkLink, AbilitiesBox};

