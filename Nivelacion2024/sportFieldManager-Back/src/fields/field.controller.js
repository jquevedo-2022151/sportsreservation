import Field from "./field.model.js"

export const addField = async (req, res)=> {
    try{
        const data = req.body
        if(req.file) {
            data.photo = req.file.filename;
        }

        const field = new Field(data);
        await field.save();
        res.status(200).json({message: "!Cancha agregado exitosamente!",
            field,
        })
    }catch(e) {
        console.error(e)
        return res.status(500).send("Algo salió mal al agregar el campo a la base de datos")
    }
}

export const getFields = async (req, res) =>{
    try{
        let field = await Field.find()
        return res.json({ field })
    }catch(e){
        console.error(e)
        return res.statuss(500).send({message: 'Error getting fields'})
    }
}