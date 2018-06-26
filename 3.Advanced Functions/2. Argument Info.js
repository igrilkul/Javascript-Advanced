function f() {
    let summary = new Map();
    for(let i=0;i<arguments.length;i++)
    {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+': '+obj);
        if(!summary.has(type))
        {
            summary.set(type,0);
        }


            let oldValue=summary.get(type);
            summary.set(type,oldValue+1);

    }

    [...summary].sort((a,b)=>b[1]-a[1]).forEach(x=>console.log(`${x[0]} = ${x[1]}`));

}
f('cat', 42,65,'hu','ui0','op', function () { console.log('Hello world!'); });