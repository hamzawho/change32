// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createPool({
//    host: "13.60.169.147",
//    user: 'root',
//    password: "hamza12345",
//    database: 'rockhairsaloon',

//  });


// app.get('/', (req, res) => {
//    return res.json(" BACKENNND SIDE");
// });

// app.get('/getusers', (req, res) => {
//    const sql = 'SELECT * FROM `user` ORDER BY id DESC';
//    db.query(sql, (err, data) => {
//       if (err) return res.json(err);
//       return res.json(data);
//    });
// });

// app.post('/saveuser', (req, res) => {
//    const body = req.body;
//    const sql = `INSERT INTO user (name, age, Death) VALUES (?, ?, ?)`;
//    const values = [body.name, body.age, body.Death];

//    db.query(sql, values, (err, results) => {
//       if (err) {
//          console.log(err);
//          res.status(500).json({ status: 'error' });
//       } 
//       else {
//          res.status(200).json({ status: 'inserted' });
//       }
//    });
// });

// app.delete('/delete', (req, res) => {
//    const id = req.query.id;
//    const sql = 'DELETE FROM user WHERE id = ?';
//    const values = [id];

//    db.query(sql, values, (err, result) => {
//       if (err) 
//       {
//          console.log(err);
//          res.status(500).json({ status: 'error' });
//       } 
//       else {
//          if (result.affectedRows > 0)
//           {
//             res.status(200).json({ status: 'deleted' });
//          }
//       }
//    });
// });

// app.put('/update', (req, res) => {
//    const id = req.query.id;
//    const body = req.body;
 
//    const sql = `UPDATE user SET name=?, age=?, Death=? WHERE id=?`;
//    const values = [body.name, body.age, body.Death, id];
 
//    db.query(sql, values, (err, result) => {
//      if (err) {
//        console.log(err);
//        res.status(500).json({ status: 'error' });
//      } else {
//        if (result.affectedRows > 0) {
//          res.status(200).json({ status: 'updated' });
//        } else {
//          res.status(404).json({ status: 'not found' });
//        }
//      }
//    });
//  });
// app.listen(8082, () => {
//    console.log("LISTENING");
// });




const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
   host: "13.60.169.147",
   user: 'root',
   password: "hamza12345",
   database: 'rockhairsaloon',
});

// ... (Your existing routes)

// Test Database Connection Route
app.get('/test-db', (req, res) => {
   db.query('SELECT 1', (err, results) => {
      if (err) {
         console.error("Error connecting to database:", err);
         res.status(500).json({ status: 'error', message: 'Database connection error' });
      } else {
         console.log("Database connection successful!");
         res.status(200).json({ status: 'success', message: 'Database connection successful!' });
      }
   });
});

app.listen(8082, () => {
   console.log("LISTENING");
});
