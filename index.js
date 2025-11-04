const express = require('express');
const app = express();
const db = require('./models');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(PORT, ()=>{
  console.log('Server started on port 3000');
})

db.sequelize.sync()
.then((result) => {
  app.listen(3000, ()=>{
    console.log('Server started');
  })
}).catch((err)=>{
  console.log(err);
})

app.post('/Film', async (req, res) => {
  const data = req.body;
  try {
    const Film = await db.Film.create(data);
    res.send(Film);
  } catch (err) {
    res.send(err);
  }
});

app.get('/Film', async (req, res) => {
  try {
    const Film = await db.Film.findAll();
    res.send(Film);
  } catch (err) {
    res.send(err);
  }
});

app.put('/Film/:tittle', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const Film = await db.Film.findByPk(id);
    if (!Film) {
      return res.status(404).send({ message: 'Film tidak ditemukan' });
    }

    await Film.update(data);
    res.send({ message: 'Data berhasil diupdate', Film });
  } catch (err) {
    res.status(500).send(err);
  }
});


app.delete('/Film/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const Film = await db.Film.findByPk(id);
    if (!Film) {
      return res.status(404).send({ message: 'Film tidak ditemukan' });
    }

    await Film.destroy();
    res.send({ message: 'Film berhasil dihapus' });
  } catch (err) {
    res.status(500).send(err);
  }
});