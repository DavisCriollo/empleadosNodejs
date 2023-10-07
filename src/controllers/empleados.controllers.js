import   {pool} from "../db.js"

export const getEmpleado=async(req,res)=>{

    
    try {
        const [rows]=await pool.query('SELECT  * FROM employee where id=?',[req.params.id])
   
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







export const getEmpleados=async(req,res)=>{

   
    try {
        const [rows]=await pool.query('SELECT *FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status().json(
            {
                "msg":'Ocurrió un error'
            }
        )
    }

}


export const createEmpleados=async(req,res)=>{



try {
    const {name,salary} =req.body
    const [rows]=await  pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
// console.log(req.body)
res.send({
   "id": rows.insertId,
   name,
   salary
})
} catch (error) {
    return res.status().json(
        {
            "msg":'Ocurrió un error'
        }
    )
}

}





export const updateEmpleado=async(req,res)=>{
 
   
try {
    const {id} = await req.params
  const {name,salary} = await req.body
  
  const [result]= await pool.query('UPDATE employee SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?',[name,salary,id])
  if(result.affectedRows==0)return res.status(404).json({"msg":'Registro no encontrado'})
    
  const [rows]=await pool.query('SELECT  * FROM employee where id=?',[id])
   
  
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










export const deleteEmpleado= async(req,res)=>{

 


     try {
        const [result]=await pool.query('DELETE FROM employee where id=?',[req.params.id])
   
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