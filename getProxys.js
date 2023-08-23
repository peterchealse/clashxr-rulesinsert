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

//美国节点
genrateProxiesByCountry('美国','american')
genrateProxiesByCountry('台湾','tw')
genrateProxiesByCountry('日本','jp')
genrateProxiesByCountry('香港','hk')
genrateProxiesByCountry('印度','india')
genrateProxiesByCountry('韩国','korea')
genrateProxiesByCountry('加拿大','canada')



function genrateProxiesByCountry(country,fname) {
  const filterProxies = proxies.filter((proxy) => proxy.name.includes(country))
  const proxiesString = stringify({proxies:filterProxies})
  const editor = fs.createWriteStream(`${configPath}/${fname}_proxies.yaml`)
  editor.write(proxiesString)
  editor.end()
  console.log(`已生成${country}节点文件`)
}