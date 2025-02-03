
let produtos = [
    { nome: "Pizza", preco: 50 },
    { nome: "Hambúrguer", preco: 25 },
    { nome: "Refrigerante", preco: 10 },
    { nome: "Batata Frita", preco: 15 }
];

let mesas = { 1: [], 2: [], 3: [], 4: [], 5: [] };
let historicoPedidos = [];
let relatorioVendas = [];

function loadPage(page) {
    const content = document.getElementById("main-content");
    if (page === "pedidos_mesa") {
        content.innerHTML = `
            <h1>Pedidos de Mesa</h1>
            <div class="mesa-pedidos">
                ${Object.keys(mesas).map(num => `
                    <div class="mesa ${mesas[num].length > 0 ? 'ocupada' : ''}" onclick="verPedidos(${num})">Mesa ${num}</div>
                `).join('')}
            </div>
            <div id="detalhes-mesa"></div>
        `;
    } else {
        content.innerHTML = `<h1>${page.replace('_', ' ')}</h1><p>Conteúdo da página ${page}...</p>`;
    }
}

function verPedidos(mesa) {
    const detalhes = document.getElementById("detalhes-mesa");
    let total = mesas[mesa].reduce((sum, p) => sum + (p.preco * p.quantidade), 0);
    detalhes.innerHTML = `
        <h2>Pedidos da Mesa ${mesa}</h2>
        <ul>${mesas[mesa].map(p => `<li>${p.nome} - R$${p.preco.toFixed(2)} x ${p.quantidade}</li>`).join('') || '<li>Nenhum pedido</li>'}</ul>
        <p><strong>Total: R$${total.toFixed(2)}</strong></p>
        <button onclick="finalizarMesa(${mesa}, ${total})">Finalizar Mesa</button>
        <button onclick="cancelarPedido(${mesa})">Cancelar Pedido</button>
        <h3>Adicionar Produto</h3>
        <select id="produto-${mesa}">
            ${produtos.map(p => `<option value="${p.nome}" data-preco="${p.preco}">${p.nome} - R$${p.preco}</option>`).join('')}
        </select>
        <input type="number" id="quantidade-${mesa}" min="1" value="1">
        <button onclick="adicionarProduto(${mesa})">Adicionar</button>
    `;
}

function adicionarProduto(mesa) {
    let select = document.getElementById(`produto-${mesa}`);
    let quantidade = document.getElementById(`quantidade-${mesa}`).value;
    let produtoNome = select.value;
    let produtoPreco = parseFloat(select.options[select.selectedIndex].getAttribute("data-preco"));
    mesas[mesa].push({ nome: produtoNome, preco: produtoPreco, quantidade: parseInt(quantidade) });
    loadPage('pedidos_mesa');
    verPedidos(mesa);
}

function finalizarMesa(mesa, total) {
    historicoPedidos.push({ mesa, total, data: new Date().toLocaleString(), pedidos: [...mesas[mesa]] });
    relatorioVendas.push({ total, data: new Date().toLocaleString() });
    mesas[mesa] = [];
    loadPage('pedidos_mesa');
}

function cancelarPedido(mesa) {
    mesas[mesa] = [];
    loadPage('pedidos_mesa');
}