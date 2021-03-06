import mongoose from "mongoose";
import logger from "./logger";

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

if (!process.env.MONGO_URL) {
  throw new Error("no mongo url");
}

const url = process.env.MONGO_URL;
mongoose.connect(url, mongoOptions);

const db = mongoose.connection;
db.on("error", err => logger.error("error connecting to db:" + err));
db.once("open", () => {
  logger.info("connected to mongodb");
});
