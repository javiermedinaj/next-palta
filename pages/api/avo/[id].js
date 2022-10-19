import DB from "../../../database/db"

const AvoDetail = async (req, res) => {
    const db = new DB()
    const id = req.query.id
    const entry = await db.getById(id)

    // res.statusCode = 200
    // res.setHeader("Content-Type", "application/json")
    // res.end(JSON.stringify({ data: entry }))
    //redumido en una sola linea
    res.status(200).json(entry)

}

export default AvoDetail
