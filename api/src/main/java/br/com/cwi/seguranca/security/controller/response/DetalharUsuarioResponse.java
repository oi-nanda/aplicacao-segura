package br.com.cwi.seguranca.security.controller.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@JsonInclude(NON_NULL)
public class DetalharUsuarioResponse {

    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String imagem;
    private LocalDate criadoEm;
    private LocalDate atualizadoEm;

}
