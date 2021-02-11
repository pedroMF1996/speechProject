var utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR";
utterance.rate = 1;
utterance.text = "Seu texto aqui";
var statusLimparAutomatico = false;
function atualizaVelocidade(rate) {
    utterance.rate = rate;
}
function toogleLimparAutomatico(limpar) {
    limpar.checked = !limpar.checked;
    statusLimparAutomatico = limpar.checked;
}
function atualizaLimparAutomatico(limpar) {
    var outerHTML = limpar.outerHTML;
    var ativar = outerHTML.includes('checked');
    if (ativar) {
        limpar.classList.add('ativo');
    }
    else {
        limpar.classList.remove('ativo');
    }
    statusLimparAutomatico = !statusLimparAutomatico;
}
function limpar(event) {
    if (statusLimparAutomatico) {
        var inputText = event.target;
        inputText.innerText = "";
        setText(event);
    }
}
function speak() {
    speechSynthesis.speak(utterance);
}
function hoverNoSelect(aplica) {
    var span = document.querySelector('#langdiv');
    span.style.transform = aplica ? 'scale(1.15)' : '';
}
function hoverNoSwitch(aplica) {
    var span = document.querySelector('#switchSpan');
    span.style.transform = aplica ? 'scale(1.15)' : '';
}
function cancel() {
    speechSynthesis.cancel();
}
function setText(event) {
    var text = event.target.innerText;
    if (utterance.lang == 'pt-BR') {
        text = corrigePronuncia(text).toUpperCase();
    }
    utterance.text = text;
}
function selecionaLinguagem(linguagem) {
    utterance.lang = linguagem;
}
function corrigePronuncia(textoCru) {
    var text;
    text = textoCru;
    if (text.length > 0) {
        text = text.replace('"', '');
        text = text.replace('¹', '');
        text = text.replace('²', '');
        text = text.replace('³', '');
        text = ajusteDeSiglas(text);
        text = ajusteDePalavras(text);
        text = substituicaoDeIndexacaoPorPonto(text);
        text = ajustesDeComandos(text);
    }
    else {
        text = 'Por favor, insira seu texto na caixa de texto;';
    }
    return text;
}
function substituicaoDeIndexacaoPorPonto(texto) {
    var text;
    text = texto;
    var aux = text.split('• ');
    text = aux.join('. ');
    aux = text.split('º ');
    text = aux.join('. ');
    return text;
}
function ajustesDeComandos(texto) {
    var text;
    text = texto;
    text = text.replace('pvm_addhosts', 'pvm ãnderláine áde hosts');
    text = text.replace('pvm_mytid', 'pvm ãnderláine mái t id');
    text = text.replace('pvm_exit', 'pvm ãnderláine exit');
    text = text.replace('pvm_kill', 'pvm ãnderláine kill');
    text = text.replace('pvm_spawn', 'pvm ãnderláine spawn');
    text = text.replace('pvm_recv', 'pvm ãnderláine recv');
    text = text.replace('pvm_send', 'pvm ãnderláine send');
    return text;
}
function ajusteDeSiglas(texto) {
    var text;
    text = texto;
    text = text.replace('MIMD', 'M I M D');
    text = text.replace('SIMD', 'S I M D');
    text = text.replace('CPAR,', 'C PAR,');
    text = text.replace('π', 'pí');
    text = text.replace('E/S', 'entrada e saída');
    text = text.replace('PC’s', 'pecês');
    text = text.replace('PC’s,', 'pecês,');
    text = text.replace('4D/480', '4 D / 480');
    text = text.replace('Kbytes', 'cá bytes');
    text = text.replace('Kbytes,', 'cá bytes,');
    text = text.replace('VGX', 'V G X');
    text = text.replace('Mbytes', 'Mega báites');
    text = text.replace('R3000A', ' R 3000 A');
    text = text.replace('MIPS', 'M I P S');
    text = text.replace('LU', 'L U');
    text = text.replace('§', 'Parágrafo');
    text = text.replace('.br', 'ponto bêê r');
    text = text.replace('P:', 'Pergunta:');
    text = text.replace('R:', 'Respósta:');
    text = text.replace('n.º', 'número');
    text = text.replace('art.', 'Artigo');
    text = text.replace('(i)', 'Primeiro');
    text = text.replace('V.', 'Quínto');
    text = text.replace('X.', 'Décimo');
    text = text.replace('CCBs', 'C C Bs');
    return text;
}
function ajusteDePalavras(texto) {
    var text;
    text = texto;
    text = text.replace(/varíavel/gi, 'variável');
    text = text.replace(/arrays/gi, 'arreis');
    text = text.replace(/array/gi, 'arrei');
    text = text.replace(/ALIGN/gi, 'aláin');
    text = text.replace(/DISTRIBUTE/gi, 'DISTRIBÍUTE');
    text = text.replace(/sequencial/gi, 'seqüencial');
    text = text.replace(/linguagemde/gi, 'linguagem de');
    text = text.replace(/bilioteca/gi, 'biblioteca');
    text = text.replace(/CPAR/gi, 'C PAR');
    text = text.replace(/sequencialmente/gi, 'seqüencialmente');
    text = text.replace(/implementam/gi, 'implemêntam');
    text = text.replace(/paralelos/gi, 'paralélos');
    text = text.replace(/caput/gi, 'capítulo');
    text = text.replace(/multithreaded/gi, 'multithrédi');
    text = text.replace(/Treadmarks/gi, 'Tredmarks');
    text = text.replace(/providencia/gi, 'prôvídêncíá');
    text = text.replace(/visa/gi, 'viza');
    text = text.replace(/ocorram/gi, 'ocôôrram');
    text = text.replace(/day trade/gi, 'dei treide');
    text = text.replace(/pricing/gi, 'práicing');
    text = text.replace(/equitativas/gi, 'ecuitativas');
    text = text.replace(/visando/gi, 'vizando');
    text = text.replace(/Procedural/gi, 'Prôcedúral');
    text = text.replace(/heterogêneos/gi, 'heterojêneos');
    text = text.replace(/heterogêneas/gi, 'heterojêneas,');
    text = text.replace(/heterogêneas/gi, 'heterojêneas');
    text = text.replace(/monitores/gi, 'mônitôrês');
    text = text.replace(/Compliance/gi, 'Compláince');
    text = text.replace('Icap', 'ÁIQUÉP');
    text = text.replace(/encontram-se/gi, 'encôntram-se');
    text = text.replace(/TPICAP/gi, 'TÊ PÊ ÁIQUÉP');
    text = text.replace(/transputer/gi, 'trânspíuter');
    text = text.replace(/sinalize/gi, 'sínalíze');
    text = text.replace(/buffer/gi, 'bãffer');
    text = text.replace(/main/gi, 'meín');
    text = text.replace(/viabiliza/gi, 'viabilÍza');
    text = text.replace(/deste/gi, 'dêste');
    text = text.replace(/sobre/gi, 'sôôbre');
    text = text.replace(/#/gi, 'rach tég');
    text = text.replace(/visam/gi, 'vísam');
    text = text.replace(/administrem/gi, 'adminíístrem');
    text = text.replace(/workshops/gi, 'uorque shóps');
    text = text.replace(/expostas/gi, 'expóstas');
    text = text.replace(/Jantares/gi, 'Jantáres');
    text = text.replace(/contribuam/gi, 'contribúúam');
    text = text.replace(/afete/gi, 'afééte');
    text = text.replace(/íntegra/gi, 'ííntegra');
    text = text.replace(/sogros/gi, 'sôôgros');
    text = text.replace(/inspira/gi, 'înspííra');
    text = text.replace(/comprometemos/gi, 'compromêtêmos');
    text = text.replace(/feedbacks/gi, 'fide backs');
    text = text.replace(/Buscamos/gi, 'Buscâmos');
    text = text.replace(/stakeholders/gi, 'steiq rolders');
    text = text.replace(/Códigode Conduta/gi, 'Código de Conduta');
    text = text.replace(/macrotasking/gi, 'macrotésking');
    text = text.replace(/multitasking/gi, 'múltitasking');
    text = text.replace(/microtasking/gi, 'microtésking');
    text = text.replace(/macrotarefa/gi, 'mácrotarefa');
    text = text.replace(/microtarefa/gi, 'mícrotarefa');
    text = text.replace(/marketing/gi, 'márquetin');
    text = text.replace(/assincronamente/gi, 'assíncronamente');
    text = text.replace(/overhead/gi, 'over réd');
    text = text.replace(/maquina/gi, 'máquina');
    text = text.replace(/triangulares/gi, 'triângulares');
    text = text.replace(/Constata-se/gi, 'Constáta-se');
    text = text.replace(/Nota-se/gi, 'Nóta-se');
    text = text.replace(/Ve-se/gi, 'Vê-se');
    text = text.replace('(pre-scheduling)', '(pré-squédulin)');
    return text;
}
