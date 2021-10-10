import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import MovementList from './MovementList';
import MovementsList from './FetchedMovements';
import data from '../data.json';
 
const useStyles = makeStyles(() => ({
   homePageContent: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   },
   newDiv: {
       marginTop: '100px'
   }
}));

const HomePage = (props) => {
    const classes = useStyles();

    const displayData = () => {
        console.log(data, "data");
        const moveArray = Object.entries(data);
        const moveMap = moveArray.map(movement => {
            return (
                <div 
                    key={movement} 
                >
                {movement} - {movement.weight}lbs
                </div>
            )})
        return moveMap;  
    }

   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep  Max"}/>
            <div>
                <MovementsList />
                <div>{displayData()}</div>
                <MovementList />
            </div>
            <FabButton />
       </div>
   );
};

export default (HomePage);
