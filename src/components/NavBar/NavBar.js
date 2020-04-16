import React, {useState} from "react";
import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {MyToolbar, MyLightLink, MyDarkLink} from "../../css/styles";


//Menu Items
const menuItems = ["Search Pokemons", "Compare Pokemons", "Pokemon Suprise"];

//Hamburger Menu
const menuItemsButtons = menuItems.map(text => {
  return (
    <Button key={text}>
      <MyLightLink to={`/${text.replace(/ +/g, "")}`}>
        {text}
      </MyLightLink>
    </Button>
  );
});

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const mediaQuery = useMediaQuery("(max-width:550px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const hamburger = (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <AppBar color="secondary">
      <MyToolbar>
        <Typography variant="h4">
          <MyLightLink to="/">Pokedex!</MyLightLink>
        </Typography>
        {mediaQuery ? hamburger : <div>{menuItemsButtons}</div>}
        <Drawer open={open} onClose={handleDrawerClose}>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {text === "Search Pokemon" ? (
                    <IconButton />
                  ) : (
                    <IconButton />
                  )}
                </ListItemIcon>
                <ListItemText>
                  <MyDarkLink
                    to={`/${text.replace(/ +/g, "")}`}
                    onClick={handleDrawerClose}
                  >
                    {text}
                  </MyDarkLink>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </MyToolbar>
    </AppBar>
  );
};

export default NavBar;
