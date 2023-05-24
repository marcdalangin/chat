const express = require("express"); 
const cors = require("cors"); 
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username, first_name, secret } = req.body;

  try{
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username, first_name},
      {headers: {"Private-key": "e45f02d5-2a47-46a8-838e-14422bc6f654"}}
    );
    return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);