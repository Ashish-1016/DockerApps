import express from  'express'
import cors from 'cors'
import data from './data.json'


const app = express()
app.listen('3000',()=>{
    console.log("server running...")
})