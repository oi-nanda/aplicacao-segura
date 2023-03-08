package br.com.cwi.seguranca.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter @Setter
public class AlterarUsuarioRequest {
    private Long id;

    @NotBlank
    private String nome;

    @Email
    @NotNull
    private String email;

    @NotNull
    private String telefone;

    private String imagem;
}
