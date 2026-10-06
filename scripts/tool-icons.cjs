// Build local SVG tool tiles to keep sizes and the blue palette consistent.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),assets=path.join(root,'assets');
const native={
 aks:['Azure Kubernetes Service','<path d="M24 8l12 7v14l-12 7-12-7V15zM24 8v28M12 15l12 7 12-7M12 29l12-7 12 7"/>','AKS'],
 bicep:['Bicep','<path d="M17 12l-7 8 7 8M31 12l7 8-7 8M27 10l-6 20"/>','BICEP'],
 'azure-monitor':['Azure Monitor','<rect x="9" y="10" width="30" height="21" rx="3"/><path d="M14 23h5l3-7 4 11 3-5h5M19 36h10M24 31v5"/>','MONITOR'],
 gitops:['GitOps','<circle cx="24" cy="13" r="3"/><circle cx="15" cy="30" r="3"/><circle cx="33" cy="30" r="3"/><path d="M24 16v6M15 27v-5h18v5M10 14a15 15 0 0 1 28 0M38 12v5h-5"/>','GITOPS'],
 zabbix:['Zabbix','<path d="M13 12h22L13 30h22"/>','ZABBIX'],
 rapid7:['Rapid7','<path d="M12 14v17M12 19q8-9 12 0M27 12h11L29 31"/>','RAPID7'],
 rbac:['RBAC','<circle cx="20" cy="16" r="5"/><path d="M10 32v-5q10-12 20 0M32 20v7M29 24h6"/>','RBAC'],
 hardening:['Hardening','<path d="M24 9l12 5v10c0 8-12 13-12 13S12 32 12 24V14zM19 23l4 4 7-9"/>','HARDEN'],
 patches:['Parches','<rect x="12" y="11" width="24" height="23" rx="4"/><path d="M24 16v13M18 22h12"/>','PATCH'],
 vulnerabilities:['Vulnerabilidades','<circle cx="21" cy="20" r="10"/><path d="M28 27l10 10M21 14v8M21 26v1"/>','VULN'],
};
function write(name,title,content){fs.writeFileSync(path.join(assets,`icon-${name}.svg`),`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img"><title>${title}</title><rect width="48" height="48" rx="10" fill="#17243a"/>${content}</svg>\n`);}
for(const[name,[title,glyph,label]]of Object.entries(native))write(name,title,`<g fill="none" stroke="#7dd3fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${glyph}</g><text x="24" y="43" text-anchor="middle" fill="#dbeafe" font-family="Consolas,monospace" font-weight="700" font-size="6">${label}</text>`);
for(const[name,file,title]of[['argocd','argo','ArgoCD'],['azuredevops','azuredevops','Azure DevOps'],['dynatrace','dynatrace','Dynatrace'],['snyk','snyk','Snyk']]){
 const raw=fs.readFileSync(path.join(assets,'source','logos',`${file}.svg`),'utf8');
 const box=raw.match(/viewBox="([^"]+)"/)[1];
 const inner=raw.replace(/^[\s\S]*?<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'');
 write(name,title,`<svg x="8" y="8" width="32" height="32" viewBox="${box}" fill="#93c5fd">${inner}</svg>`);
}
