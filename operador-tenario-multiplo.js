let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReservas = (reservasConfirmadas && quartosDisponiveis > 0) ? "Reserva confirmada"
                        :(quartosDisponiveis > 0) ? "aguardando confirmação" 
                        :"Sem quartos disponiveis";
console.log(statusReserva);