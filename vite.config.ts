import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { readFileSync } from 'fs';
import * as path from 'path';

const cdnHost = 'https://cdn.mooyuer.com';
const getJson = (path: string) => {
  return JSON.parse(readFileSync(path, { encoding: 'utf-8' }));
};
const { name } = getJson(path.join(__dirname, './package.json'));
if (!name) throw Error('package.json中name属性不能为空！');
const cdnBaseUrl = `${cdnHost}/${name}/`;
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  build: {
    base: cdnBaseUrl,
    outDir: name
  }
});
