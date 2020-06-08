import { createLogger, format, transports } from "winston";
const { label, combine, timestamp, prettyPrint } = format;
const logger = createLogger({
  format: combine(timestamp(), prettyPrint()),
  transports: [new transports.Console()],
  exitOnError: false,
});

export default logger;
