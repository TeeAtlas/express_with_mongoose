import Cat from '../models/catModel.js'

export const getCat = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Cat.findById(id);
        if(!data){
            res.status(404);
        } else {
            res.json(data);
        }
    } catch (error) {
        console.log("Not a single cat here, or one in a relationship for that matter", error);
        res.sendStatus(500)
    }
}

export const getCats = async(req, res) => {
    try {
        const data = await Cat.find();
        res.json(data);
    } catch (error) {
        console.log('No Cats, no dropouts, nothing', error);
        res.sentStatus(500);
    }
}

export const postCat = async(req, res) => {
    const { last_name, first_name, email } = req.body;
    try {
        const cat = await Cat.create({ last_name, first_name, email })
    } catch (error) {
        console.log('Post was not successful', error);
        res.sendStatus(500);
    }
}

export const postCats = async(req, res) => {
    try {
        const cats = await Cat.insertMany(req.body)
        res.status(201).json(cats);
    } catch (error) {
        console.log('Post was not successful', error);
        res.sendStatus(500);
    }
}