import React,{ useEffect } from 'react';
import classes from '../../styles/space.module.css'


export default function Space(){
 

    return <>
    <body className={classes['body']}>
        <h1>space</h1>
        <canvas 
            id="canvas"
            className={classes['canvas']}/>
    </body>
    </>
}