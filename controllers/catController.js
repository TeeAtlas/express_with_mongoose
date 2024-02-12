import Cat from '../models/cat.js'

export const getCat = async () => {
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
        res.status(500)
    }
}

export const getCats = async() => {
    try {
        await
    } catch (error) {
        console.log('No cats, no hats, nothing', error);
    }
}