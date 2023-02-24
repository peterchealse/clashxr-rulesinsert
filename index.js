import { parse, stringify } from 'yaml'
import fs from 'fs'

const fileName = '/Users/jojo/.config/clash/fast.losadhwselfff2332dasd.xyz.yaml'
const file = fs.readFileSync(fileName, 'utf8')
const fileContent = parse(file)
fileContent.rules.push('DOMAIN-SUFFIX,openai.com,🔰国外流量')
fileContent.rules.push('DOMAIN-SUFFIX,v2ex.com,🔰国外流量')
fileContent.rules.push('DOMAIN-SUFFIX,medium.com,🔰国外流量')

const fileString = stringify(fileContent)

const editor = fs.createWriteStream(fileName)
editor.write(fileString)
editor.end()