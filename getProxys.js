import { parse, stringify } from 'yaml'
import fs from 'fs'

const configPath = '/Users/jojo/.config/clash'
const fileName = `${configPath}/ClashR_1691897040.yaml`
const file = fs.readFileSync(fileName, 'utf8')
const fileContent = parse(file)

const proxies = fileContent.proxies
const proxiesString = stringify({proxies})
const editor = fs.createWriteStream(`${configPath}/proxies.yaml`)
editor.write(proxiesString)
editor.end()
