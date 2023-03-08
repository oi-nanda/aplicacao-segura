package br.com.cwi.seguranca.security.mapper;


import br.com.cwi.seguranca.security.controller.response.DetalharUsuarioResponse;
import br.com.cwi.seguranca.security.domain.Usuario;

import static java.util.Objects.isNull;

public class DetalharUsuarioMapper {
    public static DetalharUsuarioResponse toResponse(Usuario entity){
        if (isNull(entity)) {
            return DetalharUsuarioResponse.builder().build();
        }

        DetalharUsuarioResponse response = new DetalharUsuarioResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setEmail(entity.getEmail());
        response.setTelefone(entity.getTelefone());
        response.setImagem(entity.getImagem());
        response.setCriadoEm(entity.getCriadoEm());
        response.setAtualizadoEm(entity.getAtualizadoEm());
        return response;
    }


}
