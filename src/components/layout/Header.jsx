import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            وبلاگ GraphQL
          </Typography>
          <MenuRoundedIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
