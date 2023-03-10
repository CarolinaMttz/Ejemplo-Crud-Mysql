package helloworld

class Usuario {
    String correo
    String contrasena
    String nombres
    String apellidos
    String genero
    Date fecha_nacimento


    static constraints = {
        correo unique: true, nullable: false, blank: false, email: true
        contrasena nullable: false, blank: false, password: true
        nombres nullable: false, blank: false
        apellidos nullable: false, blank: false
        genero inList: ['F', 'M']
        fecha_nacimento nullable: false, blank: false
    }

    static  mapping = {
        table 'usuario'
        correo column: 'correo'
        contrasena column: 'contrasena'
        nombres column: 'nombres'
        apellidos column: 'apellidos'
        genero column: 'genero'
        fecha_nacimento column: 'fecha_nacimento'
    }
}
