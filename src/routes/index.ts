import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * Read all files in the current directory and import them
 * if the file name is not index.ts
 */
readdirSync(PATH_ROUTER).filter((file) => {
  const cleanName = cleanFileName(file);
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      // TODO Implement logger
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };



/**
 *  Clean file name
 * @param {string} fileName name of the file with estension
 * @returns file name without extension
 */
function cleanFileName(fileName: string): string {
  const file = fileName.split('.').shift();
  return file!;
};
