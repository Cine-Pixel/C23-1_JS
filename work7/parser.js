const doc = document.body;
let obj = new Object();
let unique = 1;

const dfs = (node) => {
    node.childNodes.forEach(child => {
        dfs(child);
    });
    if(node.nodeName === "#text") {
        if(node.textContent.trim().length > 0) {
            if(obj.hasOwnProperty(node.parentNode.nodeName)){
                obj[`${node.parentNode.nodeName} ${unique}`] = node.textContent;
                unique++;
            } else obj[node.parentNode.nodeName] = node.textContent;
        }
    }
}

dfs(doc);
JSON.stringify(obj);