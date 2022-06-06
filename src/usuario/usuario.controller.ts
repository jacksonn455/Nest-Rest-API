import { Body, Controller, Post } from "@nestjs/common";

@Controller("users")
export class UsuarioController{ // importar o controller no app.module.ts

    private usuarios = [];

    @Post()
    public cria(@Body() usuario){
        this.usuarios.push(usuario);

        return usuario;
    }
}