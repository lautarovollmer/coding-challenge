import axios from "axios";

export const getHome = async (req : any, res : any) => {
    try {
        res.send("Hello world!");
    } catch(error){
        console.log(error);
    };
};