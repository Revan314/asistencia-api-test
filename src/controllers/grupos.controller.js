import { pool } from '../db.js';

export const getGrupo = async (req,res) =>{ 
    try {
        const [rows] = await pool.query('SELECT * FROM grupos')
        res.json(rows)  

    } catch (error) {
        return res.status(500).json({
           message:'Algo salió mal'

        })
    }
  
}



export const getUnGrupo = async (req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM grupos WHERE id_grupo = ?',[req.params.id_grupo])
    if (rows.length <= 0 ) return res.status(404).json({

        message: 'Grupo no encontrado'
    })

   res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
          message: 'Algo salió mal'
        })
    }


}


export const createGrupo = async (req,res) =>{ 
const {nombre_Grupo,carrera_Grupo,turno_Grupo} = req.body; 
 try {
  const [rows] = await pool.query('INSERT INTO grupos (nombre_Grupo,carrera_Grupo,turno_Grupo) VALUES(?,?,?)',
  [nombre_Grupo,carrera_Grupo,turno_Grupo])
    res.send({
        id:rows.insertId,
        nombre_Grupo,
        carrera_Grupo,
        turno_Grupo,
    });
    } catch (error) {
        
        return res.status(500).json({
            message: 'Algo salió mal'
          })
    }

}


export const deleteGrupo = async (req,res) =>{ 
 try {
    const [result] = await pool.query('DELETE FROM grupos WHERE id_grupo = ?', [req.params.id_grupo])
 
 if (result.affectedRows <=0 ) return res.status(404).json({
     message: 'Grupo no encontrado'
     
 })


 res.sendStatus(204)
 } catch (error) {
    return res.status(500).json({
        message: 'Algo salió mal'
      })
 }
}



export const updateGrupo = async (req,res) =>{ 
    const {id_grupo} = req.params
    const {nombre_Grupo,carrera_Grupo,turno_Grupo} = req.body   
  try {
  const [result] = await pool.query('UPDATE grupos SET nombre_Grupo = IFNULL(?,nombre_Grupo),carrera_Grupo = IFNULL(?,carrera_Grupo) ,turno_Grupo = IFNULL(?,turno_Grupo) WHERE id_grupo = ? ', [nombre_Grupo,carrera_Grupo,turno_Grupo,id_grupo]);
  console.log(result);
  if (result.affectedRows === 0) return res.status(404).json({

     message: 'Grupo no encontrado'
  })

  const [rows] = await pool.query('SELECT * FROM grupos WHERE id_grupo = ? ', [id_grupo])
  
  res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: 'Algo salió mal'
      })
  }
}
