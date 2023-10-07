import fs from 'fs'

// Read the contents of the file
const filePath = '/Users/jojo/Library/Application Support/Surge/Profiles/Dler Cloud.conf';
const targetFilePath = '/Users/jojo/Library/Application Support/Surge/Profiles/Dler Cloud_Manual.conf';
const fileContents = fs.readFileSync(filePath, 'utf8');

// Find the Proxy Group section
const proxyGroupRegex = /\[Proxy Group\]\n([\s\S]*?)\n\n/;
const proxyGroupMatch = fileContents.match(proxyGroupRegex);
if (!proxyGroupMatch) {
  throw new Error('Could not find [Proxy Group] section in file');
}
const proxyGroupSection = proxyGroupMatch[1];

// Add the proxy rule to the section
const steamRegex = /^Steam \=.*/m;
const steamLine = fileContents.match(steamRegex)[0];
const gateioProxyRule = steamLine.replace('Steam =', 'Gateio =') // gateio proxy rule

const updatedProxyGroupSection = `${proxyGroupSection}\n${gateioProxyRule}`;

// Replace the old Proxy Group section with the updated one
const updatedFileContents = fileContents.replace(proxyGroupRegex, `[Proxy Group]\n${updatedProxyGroupSection}\n\n`);


//add rules
const ruleRegex = /\[Rule\]\n([\s\S]*?)\n\n/;
const ruleMatch = fileContents.match(ruleRegex);
if (!ruleMatch) {
  throw new Error('Could not find [Rule] section in file');
}
const ruleSection = ruleMatch[1];
const updatedRuleSection = `${ruleSection}\n
# Gateio
DOMAIN-SUFFIX,gate.io,Gateio
DOMAIN-SUFFIX,binance.com,Gateio
`
// Replace the old Rule section with the updated one
const updatedFileContents2 = updatedFileContents.replace(ruleRegex, `[Rule]\n${updatedRuleSection}\n\n`);




// Write the updated contents back to the file
fs.writeFileSync(targetFilePath, updatedFileContents2);

