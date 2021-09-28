import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import MovementList from './MovementList';
import MovementsList from './FetchedMovements';
import { Field, reduxForm } from 'redux-form';
 
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

const renderInputName = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} type="text" /> 
            <div style={{fontSize: "15px", color:"red"}}></div>
        </div>    
    )  
};

const renderInputWeight = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} type="number" /> 
            <div style={{fontSize: "15px", color:"red"}}></div>
        </div>    
    )  
};
 
const HomePage = (props) => {
    const classes = useStyles();

    // const myDynamicManifest = {
    //     "movements": [
    //         {
    //         "movementName": "squat",
    //         "movementWeight": "121",
    //         }
    //     ]
    // };

    // const stringManifest = JSON.stringify(myDynamicManifest);
    // const blob = new Blob([stringManifest], {type: 'application/json'});
    // const manifestURL = URL.createObjectURL(blob);
    // document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);

    // const onSubmit = (formValues) => {
    //     myDynamicManifest.movements.push(formValues);
    // };

    // const manifestArray = myDynamicManifest.movements.map((name) => <div key={name.movementName}>{name.movementName} - {name.movementWeight}</div>);

    // const displayManifest = () => {
    //     return (
    //         <div>
    //             {manifestArray}
    //         </div>
    //     )
    // };
    // console.log(myDynamicManifest.movements, "function");

   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep  Max"}/>
            <div>
                {/* <div className={classes.newDiv} >
                    <form  onSubmit={props.handleSubmit(onSubmit)}>
                    <Field 
                            name="movementName"
                            component={renderInputName} 
                            label="Movement Name" 
                        />
                        <Field
                            name="movementWeight" 
                            component={renderInputWeight} 
                            label="One Rep Max" 
                         />
                         <button>Submit</button>
                    </form>
                    <div>
                        movements:{displayManifest()}
                    </div>
                </div> */}
                <MovementsList />
                <MovementList />
            </div>
            <FabButton />
       </div>
   );
};

const formWrap = reduxForm({
    form: 'homeForm',
})(HomePage);
 
export default (formWrap);
