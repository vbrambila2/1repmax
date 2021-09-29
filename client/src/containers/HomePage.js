import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import MovementList from './MovementList';
import MovementsList from './FetchedMovements';
// import { Field, reduxForm } from 'redux-form';
 
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

// const renderInputName = ({ input, label, meta }) => {
//     return (
//         <div>
//             <label>{label}:   </label>
//             <input {...input} type="text" /> 
//             <div style={{fontSize: "15px", color:"red"}}></div>
//         </div>    
//     )  
// };

// const renderInputWeight = ({ input, label, meta }) => {
//     return (
//         <div>
//             <label>{label}:   </label>
//             <input {...input} type="number" /> 
//             <div style={{fontSize: "15px", color:"red"}}></div>
//         </div>    
//     )  
// };
 
const HomePage = (props) => {
    const classes = useStyles();

    // const myDynamicManifest = {
    //     "short_name": "One Rep",
    //     "name": "One Rep Max Apps",
    //     "icons": [
    //         {
    //         "src": "favicon.ico",
    //         "sizes": "64x64 32x32 24x24 16x16",
    //         "type": "image/x-icon"
    //         },
    //         {
    //         "src": "logo192.png",
    //         "type": "image/png",
    //         "sizes": "192x192"
    //         },
    //         {
    //         "src": "logo512.png",
    //         "type": "image/png",
    //         "sizes": "512x512"
    //         }
    //     ],
    //     "movements": [
    //         {
    //         "movementName": "squat",
    //         "movementWeight": "121",
    //         }
    //     ],
    //     "start_url": ".",
    //     "display": "standalone",
    //     "theme_color": "#000000",
    //     "background_color": "#ffffff"
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

    // const fileDestination = host + '.manifest.json';
    // const filename = path.join(global.publicFolder, fileDestination);

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

// const formWrap = reduxForm({
//     form: 'homeForm',
// })(HomePage);
 
// export default (formWrap);

export default (HomePage);
