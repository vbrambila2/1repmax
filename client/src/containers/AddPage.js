import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createMovement } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import history from '../history';
import data from './data.json';

const useStyles = makeStyles(() => ({
    addPage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
    },
    addMovementDiv: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
    },
      movementName: {
        padding: '10px',
        margin: '10px',
    },
      textBoxColor: {
        background: 'white',
        borderRadius: '10px',
    },
      movementWeight: {
        margin: '10px',
        padding: '10px',
    },
      addButton: {
          width: '50px',
          borderRadius: '10px',
          marginLeft: '95px'
    },
}));

const renderInputName = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} type="text" /> 
            <div style={{fontSize: "15px", color:"red"}}>{renderError(meta)}</div>
        </div>    
    )  
};

const renderInputWeight = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} type="number" /> 
            <div style={{fontSize: "15px", color:"red"}}>{renderError(meta)}</div>
        </div>    
    )  
};

const renderError = ({ error, touched }) => {
    if (touched && error ) {
        return <div>{error}</div>
    };
};

const AddPage = (props) => {
    const classes = useStyles();
    // const onSubmit = (formValues) => {
    //     props.createMovement(formValues);
    // };
    const handleSaveToPC = (jsonData,filename) => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.click();
      };

    const onSubmit = (formValues) => {
        history.push('/');
        return handleSaveToPC();

        //BELOW THIS IS DIFFERENT CODE

        // var fs = require('browserify-fs');

        // var ourfaker = [];

        // for (let i=0; i<=25; i++) {
        //     var data = {};
        //     data.name = formValues;
        //     ourfaker.push(data);
        // };

        // fs.writeFile('dataBase.json', JSON.stringify(ourfaker), (err) => {
        //     if (err) throw err;
        //     console.log('It\'s saved!');
        //     var text = fs.readFileSync("dataBase.json");
        //     var string = text.toString('utf-8')
        //     var textByLine = string.split("\n")
        //     console.log(textByLine);

        // });

        //BELOW THIS IS DIFFERENT CODE

        // const formString = JSON.stringify(formValues);
        // const fs = require('browserify-fs');
        // const path = require('path');
        // fs.mkdir(path.join(__dirname, 'test'), function() {
        //     fs.writeFile('/data.json', formString, function() {
        //         fs.readFile('/data.json', 'utf-8', function(err, data) {
        //             console.log(data, "data");
        //         });
        //     });
        // });
        // console.log(props.move, "move state");
        // console.log(formValues, "formValues");
    };

    return (
        <div>
            <Header title="Add Movement" />
            <div className={classes.addPage}>
                <div className={classes.addMovementDiv}>
                    <form onSubmit={props.handleSubmit(onSubmit)} >
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
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        move: state.move   
    }   
};

const mapDispatchToProps = dispatch => {
    return({
        createMovement: formValues => dispatch(createMovement(formValues)),
    })
};

const validate = formValues => {
    const errors = {};

    if (!formValues.movementName) {
        errors.movementName = "Please enter a Name";
    }

    if (!formValues.movementWeight) {
        errors.movementWeight = "Please enter a Weight";
    }

    return errors;
};

const formWrap = reduxForm({
    form: 'addMovementForm',
    validate: validate,
})(AddPage);

export default connect(mapStateToProps, mapDispatchToProps)(formWrap);