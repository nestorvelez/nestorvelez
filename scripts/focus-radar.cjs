// Qualitative focus maps. These diagrams do not represent skill scores.
// Run from the repository root: node scripts/focus-radar.cjs
const fs = require('fs');
const path = require('path');
const root=path.resolve(__dirname,'..');
const escape=text=>text.replace(/&/g,'&amp;').replace(/</g,'&lt;');
for(const [input,output] of [['skills.json','radar'],['langmix.json','radar-langs']]) {
  const data=JSON.parse(fs.readFileSync(path.join(root,'assets',input),'utf8'));
  for(const theme of ['dark','light']) {
    const text=theme==='dark'?'#f0e6f0':'#2d1a24',bg=theme==='dark'?'#17171c':'#fdf0f3',grid=theme==='dark'?'#343441':'#f0c0ce';
    let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="390" viewBox="0 0 480 390" role="img"><title>${escape(data.title)}</title><desc>Mapa cualitativo de temas, sin niveles ni puntuaciones de dominio.</desc><rect width="480" height="390" rx="18" fill="${bg}"/><g font-family="ui-monospace,Consolas,monospace" fill="${text}"><text x="240" y="32" text-anchor="middle" font-size="19" font-weight="700">${escape(data.title)}</text>`;
    const polar=(i,r)=>[240+Math.sin(i*Math.PI/3)*r,200-Math.cos(i*Math.PI/3)*r];
    for(const r of [35,70,105])svg+=`<polygon points="${data.axes.map((_,i)=>polar(i,r).join(',')).join(' ')}" fill="none" stroke="${grid}"/>`;
    svg+=`<polygon points="${data.axes.map((_,i)=>polar(i,105).join(',')).join(' ')}" fill="#c7a4f5" fill-opacity=".12" stroke="#c7a4f5" stroke-width="2"/>`;
    data.axes.forEach(({label},i)=>{
      const [x,y]=polar(i,105),[lx,ly]=polar(i,137);
      svg+=`<path d="M240 200L${x} ${y}" stroke="${grid}"/><circle cx="${x}" cy="${y}" r="5" fill="#f78ca0"/><text x="${lx}" y="${ly}" text-anchor="middle" font-size="12">`;
      const words=label.split(' '); const lines=label.length>19?[words.slice(0,Math.ceil(words.length/2)).join(' '),words.slice(Math.ceil(words.length/2)).join(' ')]:[label];
      svg+=lines.map((line,j)=>`<tspan x="${lx}" dy="${j?16:0}">${escape(line)}</tspan>`).join('')+'</text>';
    });
    svg+='<text x="240" y="374" text-anchor="middle" font-size="11" fill="#8f91a8">Áreas de enfoque · sin escala de dominio</text></g></svg>';
    fs.writeFileSync(path.join(root,'assets',`${output}-${theme}.svg`),svg);
  }
}
