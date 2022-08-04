import React from "react";
import { Grid } from '@mui/material'
const RemoteApp = React.lazy(() => import("Remote/App"));
const link = 'http://localhost:4000'
export const App = () => (
  
  <div className=" ">
    <h1 style={styles.title} >¡Welcome to the host!</h1>
    <h2  style={styles.subtitle}>There is the remote apps container:</h2>
    <Grid container style={styles.container}>

      {
        [1,2,3,4,5,6].map((item) => {
          return (
          <Grid item key={item} xs={12} md={4} lg={4}  >
            <div style={styles.card}>
              
              <RemoteApp  />

            </div>
          </Grid>
          )
        })
      }
    </Grid>
    
    <br />
    <a style={styles.link} target={'_blank'}  rel="noreferrer" href={link}>
      <h5>Open to Remote App :)</h5>
    </a>
  </div>
);




const styles = {
  link: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: '#fff',
    border: '1px solid #000',
    margin: '1rem',
    textAlign: 'center',
    display: 'block',
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "1rem",
    background: "slategray",
    borderRadius: "5px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
  },
  container: {
    border: "1px solid black",
    background: "white",
    borderRadius: "5px",    
  },
  card: {
    border: "1px solid black",
    margin: "1rem",
    borderRadius: "5px",

  }
}
 
export default App;