import React from "react";
import styled from "styled-components/macro";

import {
  Avatar as MuiAvatar,
  CardContent,
  Grid,
  Link,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { ArrowDropDown } from "@material-ui/icons";

const Card = styled(MuiCard)(spacing);

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 50px;
  width: 50px;
`;

function Article() {
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container>
          <Grid item xs={1}>
            <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />   
          </Grid>
          <Grid item xs={10}>
            <ArticleContent />
          </Grid>
          <Grid item xs={1}>
            <ArrowDropDown />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function ArticleHeading(){
  return(
  <>
    <Grid container>
      <Grid item>
        <h2>Olde</h2>
      </Grid>
      <Grid item>
        <span>&#64;gossipgirl</span>
      </Grid>
      <Grid item>
        15h
      </Grid>
    </Grid>
  </>
  )
}

function ArticleContent(){
  return(
  <>
    <ArticleHeading />
    <Card>
      <CardContent>
        <p>Getting hitched? Wow you your guests with a custom app with convenitent
        wedding info, that they can add to their homescreen and apen anytime.</p> 
      </CardContent>
      <CardContent>
        <a href="#">
          glodapp.com/template/wedpp.... #madewithdlobe
        </a>
      </CardContent>
      <CardContent>
        <img src="/static/img/brands/Bloom_AppyCouple2.jpg" />
      </CardContent>
    </Card>
  </>
  )
}

function ArticleSection() {
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Article />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ArticleSection;
