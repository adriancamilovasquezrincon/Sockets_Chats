const socket=io();

const lblOnline =document.querySelector('#lblOnline')
const lblOffline =document.querySelector('#lblOffline')
const txtMensaje =document.querySelector('#txtMensaje')
const btnEnviar =document.querySelector('#btnEnviar')
let output=document.getElementById('output')

socket.on('connect',()=>{
console.log('Conectado');
   lblOnline.style.display=''
   lblOffline.style.display='none'

})

socket.on('disconnect',()=>{
    console.log('Desconectado del servidor');
    lblOnline.style.display='none'
    lblOffline.style.display=''
})

socket.on('respuesta-servidor',(payload)=>{
    console.log(payload);
    output.innerHTML +=`${payload.mensaje},   ${payload.id},   ${payload.fecha}`
})
btnEnviar.addEventListener('click',()=>{
    const mensaje=txtMensaje.value;
    const payload={
        mensaje,
        id:'65478',
        fecha:new Date().getTime()
    }

    socket.emit('mensaje-enviado', payload, (id)=>{
        console.log('Desde el servidor',id);
    })
})
