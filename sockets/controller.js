const socketController=(socket)=>{
    console.log('Cliente Conectado',socket.id);

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado');
    })

    socket.on('mensaje-enviado',(payload,recibido)=>{
        console.log(payload);
        const id=884776457;
        recibido(id);

        socket.broadcast.emit('respuesta-servidor',payload)
    })

}

export {socketController};