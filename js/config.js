// ==========================================
// ARQUIVO GESTOR DE TRÁFEGO E CONFIG. GERAIS
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "HARD",
        nome2: "PISOS", // Aparece em destaque (com a cor primária)
        whatsapp: "5512991287938" // Apenas números
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (O Select será populado sozinho no HTML)
    pisos: [
        { categoria: "Piso Vinílico Colado", nome: "Material Completo", preco: 129.90 },
        { categoria: "Piso Vinílico Colado", nome: "Material Completo + Instalação", preco: 169.90 },
        { categoria: "Piso Laminado", nome: "Material Completo", preco: 99.00 },
        { categoria: "Piso Laminado", nome: "Material Completo + Instalação", preco: 130.00 },
        { categoria: "Piso Vinílico Clicado", nome: "Material Completo", preco: 198.00 },
        { categoria: "Piso Vinílico Clicado", nome: "Material Completo + Instalação", preco: 229.90 }
    ],

    // 3. OPÇÕES DE PISO ATUAL (Select 1)
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso (Cimento)" },
        { valor: "Cerâmica", texto: "Cerâmica / Porcelanato" },
        { valor: "Madeira", texto: "Madeira / Taco" },
        { valor: "Outro", texto: "Outro / Não sei" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (Aparece no final, no modal)
    bonus: [
        { titulo: "Mão de Obra de Piso", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Rodapé Rufino Instalado", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Visita Técnica", subtitulo: "A Combinar", strike: "", gratis: false }
    ]
};
