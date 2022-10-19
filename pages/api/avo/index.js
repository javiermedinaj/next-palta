import DB from "../../../database/db"

const allAvos = async (req, res) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ length, data: allEntries }))
}

export default allAvos