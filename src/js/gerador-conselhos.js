const url = "https://api.adviceslip.com/advice";
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    atualizarConselho()
})

async function atualizarConselho(){
    const resposta = await fetch(url);
    const data = await resposta.json()
    const conselho = data.slip.advice
    const id = data.slip.id
    console.log(conselho)

    document.getElementById('id').innerText = `# ${id}`
    document.getElementById('conselho').innerHTML = conselho



}

atualizarConselho()