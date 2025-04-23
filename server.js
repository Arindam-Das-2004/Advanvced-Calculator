const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
    try {
        const { expression } = req.body;
        const result = eval(expression);  // CAUTION: This uses eval for simplicity; in production, use a safer method.
        res.json({ result });
    } catch (error) {
        res.json({ error: "Invalid Expression" });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
