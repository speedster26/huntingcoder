import * as fs from 'fs/promises';

export default async function handler(req,res){
    try {
        let data = await fs.readdir("blogdata");
        let myfile;
        let allBlogs = [];
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            myfile = await fs.readFile("blogdata/"+item,'utf-8');
            allBlogs.push(JSON.parse(myfile));
        }
        res.status(200).json(allBlogs)
    } catch (err) {
        console.error(err);
    }
    
}