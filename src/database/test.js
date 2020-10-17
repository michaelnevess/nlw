const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js')
Database.then(async db => {
    // Insert data into tables
    
    await saveOrphanage(db, 
        {
            lat: "-23.19422874510153",
            lng: "-45.940074927639216",
            name: "Lar das Meninas",
            about: "Lar para acolhimento de meninas",
            whatsapp: "129999988",
            images: [
                "https://source.unsplash.com/random?id=12",
    
                "https://source.unsplash.com/random?id=4"
            ].toString(),
            instructions: "Venha nos visitar!",
            opening_hours: "Horário de visita das 08h até 22h.",
            open_on_weekends: "0"
        } 
    ) 

    //Looking for all data in tables
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consult only one orphanage by using id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //Delet specif data from table
    //console.log(await db.run("DELETE FROM orphanages WHERE id='1'"))
})
