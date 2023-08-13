import { parse, stringify } from 'yaml'
import fs from 'fs'

const fileName = '/Users/jojo/.config/clash/ClashR_1691897040.yaml'
const file = fs.readFileSync(fileName, 'utf8')
const fileContent = parse(file)

const proxies = fileContent.proxies

const proxiesString = stringify({proxies})
console.log(proxiesString)
const editor = fs.createWriteStream('/Users/jojo/.config/clash/proxies.yaml')
editor.write(proxiesString)
editor.end()
console.log('已生成')
