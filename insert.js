import { parse, stringify } from 'yaml'
import fs from 'fs'

const fileName = '/Users/jojo/.config/clash/fast.losadhwselfff2332dasd.xyz.yaml'
const file = fs.readFileSync(fileName, 'utf8')
const fileContent = parse(file)
const ruleList = [
  'DOMAIN-SUFFIX,openai.com,🔰国外流量',
  'DOMAIN-SUFFIX,v2ex.com,🔰国外流量',
  'DOMAIN-SUFFIX,medium.com,🔰国外流量',
  'DOMAIN-SUFFIX,evm.gatenode.cc,🔰国外流量'
]
ruleList.forEach(rule => {
  console.log(rule)
  if(!fileContent.rules.includes(rule)){
    fileContent.rules.push(rule)
  }
})



const fileString = stringify(fileContent)
const editor = fs.createWriteStream(fileName)
editor.write(fileString)
editor.end()
