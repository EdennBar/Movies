import Grid from '@material-ui/core/Grid';
import { questionObj } from '../data';
import { useState } from "react";
import { CssBaseline, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Divider } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
   root:{
       backgroundColor:'black',
       alignItems: 'center',
       display: 'flex',
       justifyContent: 'center',
   },
    faqQuestion: {
        width: '100%',
        backgroundColor: 'gray',
        margin: '10px',
        height: '50px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }, header: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
     
        
    },answers:{
        color:'white',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    }
}));
const Faq = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const handleClick = (index) => {
        var question = questionObj[index]
        question.open = !question.open
        setOpen(question.open)
        console.log(question)
    };
    function b(question) {
        if(question.open)
            return {display:'block'}
        return {display:'none'}        
    }
    return (
        <Grid>
            <Divider style={{ height: '0.5rem', backgroundColor: 'grey' }} variant='fullWidth'></Divider>

                 <Typography variant="h4"  className={classes.header}
        style={{ color: 'white',backgroundColor:'black' }}>Frequently Asked Questions</Typography>
        <Grid container item xs={12} className={classes.root}>
            {questionObj.map((question, index) => (
                <Grid item xs={8}
                    key={question.id}>
                    <div className={classes.faqQuestion}>
                  
                        {question.question}
                         <AddIcon onClick={() => handleClick(index)} ></AddIcon>
                    </div>
                    <div style={b(question)} className={classes.answers}>
                        {question.answer}

                    </div>
                </Grid>
            ))}
        </Grid>
        </Grid>
    );
}

export default Faq;