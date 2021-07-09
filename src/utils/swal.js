import Swal from 'sweetalert2';

const alertas = {
    alerta(msj, icon, timer = 3000) {
        Swal.fire({
            title: msj,
            icon: icon,
            timer: timer
        });
    },

    eliminar(mensaje = "Desea eliminar el registro?", text = "") {
        return Swal.fire({
            title: mensaje,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            return result.isConfirmed;
        })
    }
};

export default alertas;
