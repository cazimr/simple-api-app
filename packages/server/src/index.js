import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "./tools/logger";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

export const app = express();
app.use(express.json());

//express safety middleware
app.use(cors());
app.use(helmet());

//request body must have 2 attributes:
//fileName (string)
//data (object)
app.post("/writeToFile", async (req, res) => {
	if (!req.body.data || !req.body.fileName) return res.status(400).send("Invalid request body");
	try {
        const fileText = JSON.stringify(req.body.data);
		fs.writeFile(`../../files/${req.body.fileName}.json`, fileText, function (err) {
			if (err) {
				console.log("Error writing to file: ", err);
				return res.status(500).send("Internal server error");
			}
			res.end("Successfuly written to file");
		});
	} catch (err) {
        console.log(err);
        res.status(500).end("Internal server error");
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	logger.info(`Server is on localhost:${port}`);
});
