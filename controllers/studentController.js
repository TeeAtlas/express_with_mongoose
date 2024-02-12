import Student from '../models/student.js'

export const getStudent = async () => {
    const { id } = req.params;
    try {
        const data = await Student.findById(id);
        if(!data){
            res.status(404);
        } else {
            res.json(data);
        }
    } catch (error) {
        console.log("Not a single student here, or one in a relationship for that matter", error);
        res.status(500)
    }
}

export const getStudents = async() => {
    try {
        await
    } catch (error) {
        console.log('No Students, no dropouts, nothing', error);
    }
}