const classe = "Mago";

switch (classe) {
    case "guerreiro":
    console.log("classe: guerreiro");
    console.log("O guerreiro é um combatente corpo a corpo, espezializando em força e resistência.");
    console.log("habilidades: ataque poderoso, desefa sólida, fúria de batalha");
    break;
        case "mago":
    console.log("classe: mago");
    console.log("O mago é um conjurador de feitiçõs, especializado em magias ofensivas e suporte.");
    console.log("habilidades: magia de fogo, magia de gelo, magia de cura");
    break;
        case "arqueiro":
    console.log("classe: arqueiro");
    console.log("O arqueiro é um atirador de longa distancia, especializado em precisão e agilidade.");
    console.log("habilidades: precião, agilidade, tiro com precisão");
    break;
        case "paladino":
    console.log("classe: paladino");
    console.log("O ladino é um especialista em furtividade e trapas, ultilizado para sabotagem e espionagem");
    console.log("habilidades: Furtividade, trapas, assasino");
    break;
    default:
        console.log("classe desconhecida. por favor, escolha entre guerreiro, mago, paladino ou arqueiro.")
}