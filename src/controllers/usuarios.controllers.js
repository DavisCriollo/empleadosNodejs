import   {pool} from "../db.js"

export const getUsuario=async(req,res)=>{

    
    try {
        const [rows]=await pool.query('SELECT  * FROM usuarios where id=?',[req.params.id])
   
   if(rows.length<=0)return res.status(404).json({"msg":'Registro no encontrado'})
   
   
    res.json(rows[0])
    } catch (error) {
        return res.status().json(
            {
                "msg":'Ocurrió un error'
            }
        )
    }

}







export const getUsuarios=async(req,res)=>{

   
    try {
        const [rows]=await pool.query('SELECT *FROM usuarios')
        res.json(rows)
    } catch (error) {
        return res.status().json(
            {
                "msg":'Ocurrió un error'
            }
        )
    }

}


export const createUsuario=async(req,res)=>{



try {
    const {nombre,clave} =req.body
    const [rows]=await  pool.query('INSERT INTO usuarios (nombre,clave) VALUES (?,?)',[nombre,clave])

res.send({
   "id": rows.insertId,
   nombre ,
   clave
})
} catch (error) {
    return res.status().json(
        {
            "msg":'Ocurrió un error'
        }
    )
}

}





export const updateUsuario=async(req,res)=>{
 
   
try {
    const {id} = await req.params
  const {nombre,clave} = await req.body
  
  const [result]= await pool.query('UPDATE usuarios SET nombre=IFNULL(?,nombre),clave=IFNULL(?,clave) WHERE id=?',[nombre,clave,id])
  if(result.affectedRows==0)return res.status(404).json({"msg":'Registro no encontrado'})
    
  const [rows]=await pool.query('SELECT  * FROM usuario where id=?',[id])
   
  
  console.log(result)


res.json(rows)
} catch (error) {
    return res.status().json(
        {
            "msg":'Ocurrió un error'
        }
    )
}

}










export const deleteUsuario= async(req,res)=>{

 


     try {
        const [result]=await pool.query('DELETE FROM usuarios where id=?',[req.params.id])
   
        if(result.affectedRows<=0)return res.status(404).json({"msg":'Registro no encontrado'})
               
         res.sendStatus(204)
         
    } catch (error) {
        return res.status().json(
            {
                "msg":'Ocurrió un error'
            }
        )
    }

}