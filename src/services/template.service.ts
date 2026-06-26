import fs from "fs/promises";
import path from "path";
import Handlebars from "handlebars";

export const renderTemplate = async (templateName: string, data: any) => {
  const filePath = path.join(__dirname, "../templates", `${templateName}.hbs`);

  const source = await fs.readFile(filePath, "utf8");

  const template = Handlebars.compile(source);

  return template(data);
};
